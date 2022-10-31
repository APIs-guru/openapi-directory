package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugForksPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugForksSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugForksSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugForksSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugForksSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugForksSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugForksSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugForksSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugForksRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugForksPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostRepositoriesWorkspaceRepoSlugForksSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugForksResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Repository map[string]interface{} 
    
}

