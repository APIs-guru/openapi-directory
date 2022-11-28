package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest struct {
	PathParams PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams
	Security   PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity
}

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse struct {
	ContentType            string
	StatusCode             int64
	BranchingModelSettings map[string]interface{}
	Error                  map[string]interface{}
}
