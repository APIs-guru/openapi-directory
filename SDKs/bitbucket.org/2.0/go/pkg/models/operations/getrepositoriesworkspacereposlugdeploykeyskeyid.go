package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams struct {
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams 
    Security GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse struct {
    ContentType string 
    StatusCode int64 
    DeployKey map[string]interface{} 
    Error map[string]interface{} 
    
}

