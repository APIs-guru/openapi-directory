package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacesWorkspacePathParams struct {
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetWorkspacesWorkspaceSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWorkspacesWorkspaceSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetWorkspacesWorkspaceSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspacesWorkspaceSecurity struct {
    Option1 *GetWorkspacesWorkspaceSecurityOption1 `security:"option"`
    Option2 *GetWorkspacesWorkspaceSecurityOption2 `security:"option"`
    Option3 *GetWorkspacesWorkspaceSecurityOption3 `security:"option"`
    
}

type GetWorkspacesWorkspaceRequest struct {
    PathParams GetWorkspacesWorkspacePathParams 
    Security GetWorkspacesWorkspaceSecurity 
    
}

type GetWorkspacesWorkspaceResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Workspace map[string]interface{} 
    
}

