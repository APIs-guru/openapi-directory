package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugDeployKeysSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams 
    Security PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugDeployKeysResponse struct {
    ContentType string 
    StatusCode int64 
    DeployKey map[string]interface{} 
    Error map[string]interface{} 
    
}

