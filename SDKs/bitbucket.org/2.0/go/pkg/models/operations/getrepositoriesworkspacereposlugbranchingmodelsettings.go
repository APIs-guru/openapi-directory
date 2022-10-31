package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams 
    Security GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    BranchingModelSettings map[string]interface{} 
    Error map[string]interface{} 
    
}

