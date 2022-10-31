package operations

import (
"openapi/pkg/models/shared")

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams struct {
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity struct {
    Option1 *DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption1 `security:"option"`
    Option2 *DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption2 `security:"option"`
    Option3 *DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurityOption3 `security:"option"`
    
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest struct {
    PathParams DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams 
    Security DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity 
    
}

type DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

