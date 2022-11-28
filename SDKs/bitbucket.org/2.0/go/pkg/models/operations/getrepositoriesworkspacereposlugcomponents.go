package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugComponentsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugComponentsPathParams
	Security   GetRepositoriesWorkspaceRepoSlugComponentsSecurity
}

type GetRepositoriesWorkspaceRepoSlugComponentsResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	PaginatedComponents *shared.PaginatedComponents
}
