package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugRefsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugRefsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugRefsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugRefsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugRefsPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugRefsQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugRefsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugRefsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedRefs *shared.PaginatedRefs 
    
}

