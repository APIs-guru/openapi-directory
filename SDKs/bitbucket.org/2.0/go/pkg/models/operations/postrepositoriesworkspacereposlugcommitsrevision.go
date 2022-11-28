package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Revision  string `pathParam:"style=simple,explode=false,name=revision"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
