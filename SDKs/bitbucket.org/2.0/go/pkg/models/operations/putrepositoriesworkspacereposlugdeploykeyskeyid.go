package operations

import (
"openapi/pkg/models/shared")

type PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams struct {
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity struct {
    Option1 *PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1 `security:"option"`
    Option2 *PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2 `security:"option"`
    Option3 *PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3 `security:"option"`
    
}

type PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest struct {
    PathParams PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams 
    Security PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity 
    
}

type PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse struct {
    ContentType string 
    StatusCode int64 
    DeployKey map[string]interface{} 
    Error map[string]interface{} 
    
}

