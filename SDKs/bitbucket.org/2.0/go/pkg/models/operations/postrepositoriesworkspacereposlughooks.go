package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugHooksPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugHooksSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugHooksSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugHooksSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugHooksSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugHooksSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugHooksSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugHooksSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugHooksRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugHooksPathParams 
    Security PostRepositoriesWorkspaceRepoSlugHooksSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugHooksResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    WebhookSubscription map[string]interface{} 
    
}

