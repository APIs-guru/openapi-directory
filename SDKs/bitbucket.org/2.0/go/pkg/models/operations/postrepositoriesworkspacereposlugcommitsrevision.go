package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Revision  string `pathParam:"style=simple,explode=false,name=revision"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity struct {
	Option1 *PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption1 `security:"option"`
	Option2 *PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption2 `security:"option"`
	Option3 *PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption3 `security:"option"`
}

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams
	Security   PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity
}

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse struct {
	ContentType        string
	StatusCode         int64
	Error              map[string]interface{}
	PaginatedChangeset *shared.PaginatedChangeset
}
