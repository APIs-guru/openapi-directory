package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDPathParams struct {
	ComponentID int64  `pathParam:"style=simple,explode=false,name=component_id"`
	RepoSlug    string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace   string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurity struct {
	Option1 *GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurityOption1 `security:"option"`
	Option2 *GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurityOption2 `security:"option"`
	Option3 *GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurityOption3 `security:"option"`
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
