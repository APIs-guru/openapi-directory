package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepositoriesWorkspaceRepoSlugCommitsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PostRepositoriesWorkspaceRepoSlugCommitsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepositoriesWorkspaceRepoSlugCommitsRequest struct {
	PathParams PostRepositoriesWorkspaceRepoSlugCommitsPathParams
	Security   PostRepositoriesWorkspaceRepoSlugCommitsSecurity
}

type PostRepositoriesWorkspaceRepoSlugCommitsResponse struct {
	ContentType        string
	StatusCode         int64
	Error              map[string]interface{}
	PaginatedChangeset *shared.PaginatedChangeset
}
