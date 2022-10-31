package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDPathParams 
    Security GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse struct {
    ContentType string 
    StatusCode int64 
    Branchrestriction map[string]interface{} 
    Error map[string]interface{} 
    
}

