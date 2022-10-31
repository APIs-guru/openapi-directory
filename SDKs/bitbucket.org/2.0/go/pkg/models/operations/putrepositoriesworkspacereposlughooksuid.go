package operations

import (
"openapi/pkg/models/shared")

type PutRepositoriesWorkspaceRepoSlugHooksUIDPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    UID string `pathParam:"style=simple,explode=false,name=uid"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutRepositoriesWorkspaceRepoSlugHooksUIDSecurity struct {
    Option1 *PutRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption1 `security:"option"`
    Option2 *PutRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption2 `security:"option"`
    Option3 *PutRepositoriesWorkspaceRepoSlugHooksUIDSecurityOption3 `security:"option"`
    
}

type PutRepositoriesWorkspaceRepoSlugHooksUIDRequest struct {
    PathParams PutRepositoriesWorkspaceRepoSlugHooksUIDPathParams 
    Security PutRepositoriesWorkspaceRepoSlugHooksUIDSecurity 
    
}

type PutRepositoriesWorkspaceRepoSlugHooksUIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    WebhookSubscription map[string]interface{} 
    
}

