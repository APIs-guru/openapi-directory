package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity struct {
	Option1 *PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption1 `security:"option"`
	Option2 *PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption2 `security:"option"`
	Option3 *PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption3 `security:"option"`
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
