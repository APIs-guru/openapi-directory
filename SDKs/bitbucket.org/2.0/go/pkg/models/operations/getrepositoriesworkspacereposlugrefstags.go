package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugRefsTagsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugRefsTagsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedTags *shared.PaginatedTags 
    
}

