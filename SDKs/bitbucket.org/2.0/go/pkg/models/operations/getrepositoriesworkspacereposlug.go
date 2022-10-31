package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugPathParams 
    Security GetRepositoriesWorkspaceRepoSlugSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Repository map[string]interface{} 
    
}

