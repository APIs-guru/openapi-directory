package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams
	Security   GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse struct {
	ContentType            string
	StatusCode             int64
	BranchingModelSettings map[string]interface{}
	Error                  map[string]interface{}
}
