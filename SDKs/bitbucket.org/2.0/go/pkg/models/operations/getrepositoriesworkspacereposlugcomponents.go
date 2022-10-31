package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugComponentsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption3 `security:"option"`
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
