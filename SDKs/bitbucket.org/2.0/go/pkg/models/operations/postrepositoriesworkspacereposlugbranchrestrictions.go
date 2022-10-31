package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    Branchrestriction map[string]interface{} 
    Error map[string]interface{} 
    
}

