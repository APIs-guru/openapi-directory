package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugRefsBranchesPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugRefsBranchesPathParams 
    Security PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse struct {
    ContentType string 
    StatusCode int64 
    Branch map[string]interface{} 
    Error map[string]interface{} 
    
}

