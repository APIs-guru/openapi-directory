package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugBranchingModelPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugBranchingModelSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugBranchingModelSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugBranchingModelSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugBranchingModelPathParams 
    Security GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugBranchingModelResponse struct {
    ContentType string 
    StatusCode int64 
    BranchingModel map[string]interface{} 
    Error map[string]interface{} 
    
}

