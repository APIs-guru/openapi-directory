package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPathParams
	Security   GetRepositoriesWorkspaceRepoSlugSecurity
}

type GetRepositoriesWorkspaceRepoSlugResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Repository  map[string]interface{}
}
