package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugVersionsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugVersionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugVersionsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugVersionsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugVersionsSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugVersionsSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugVersionsSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugVersionsSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugVersionsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugVersionsPathParams 
    Security GetRepositoriesWorkspaceRepoSlugVersionsSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugVersionsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedVersions *shared.PaginatedVersions 
    
}

