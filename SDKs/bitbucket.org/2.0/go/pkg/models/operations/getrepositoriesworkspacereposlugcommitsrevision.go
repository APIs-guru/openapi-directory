package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Revision string `pathParam:"style=simple,explode=false,name=revision"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams 
    Security GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedChangeset *shared.PaginatedChangeset 
    
}

