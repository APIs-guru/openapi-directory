package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams struct {
    Kind *string `queryParam:"style=form,explode=true,name=kind"`
    Pattern *string `queryParam:"style=form,explode=true,name=pattern"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedBranchrestrictions *shared.PaginatedBranchrestrictions 
    
}

