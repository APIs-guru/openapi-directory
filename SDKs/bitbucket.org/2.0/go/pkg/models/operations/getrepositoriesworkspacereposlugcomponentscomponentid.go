package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDPathParams struct {
	ComponentID int64  `pathParam:"style=simple,explode=false,name=component_id"`
	RepoSlug    string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace   string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugComponentsComponentIDPathParams
	Security   GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurity
}

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDResponse struct {
	ContentType string
	StatusCode  int64
	Component   map[string]interface{}
	Error       map[string]interface{}
}
