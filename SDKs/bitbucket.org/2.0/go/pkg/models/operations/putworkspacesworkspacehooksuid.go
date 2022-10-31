package operations

import (
"openapi/pkg/models/shared")

type PutWorkspacesWorkspaceHooksUIDPathParams struct {
    UID string `pathParam:"style=simple,explode=false,name=uid"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutWorkspacesWorkspaceHooksUIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutWorkspacesWorkspaceHooksUIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutWorkspacesWorkspaceHooksUIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutWorkspacesWorkspaceHooksUIDSecurity struct {
    Option1 *PutWorkspacesWorkspaceHooksUIDSecurityOption1 `security:"option"`
    Option2 *PutWorkspacesWorkspaceHooksUIDSecurityOption2 `security:"option"`
    Option3 *PutWorkspacesWorkspaceHooksUIDSecurityOption3 `security:"option"`
    
}

type PutWorkspacesWorkspaceHooksUIDRequest struct {
    PathParams PutWorkspacesWorkspaceHooksUIDPathParams 
    Security PutWorkspacesWorkspaceHooksUIDSecurity 
    
}

type PutWorkspacesWorkspaceHooksUIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    WebhookSubscription map[string]interface{} 
    
}

