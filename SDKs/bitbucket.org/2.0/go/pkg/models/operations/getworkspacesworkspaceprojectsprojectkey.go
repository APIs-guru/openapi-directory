package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacesWorkspaceProjectsProjectKeyPathParams struct {
    ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetWorkspacesWorkspaceProjectsProjectKeySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetWorkspacesWorkspaceProjectsProjectKeySecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetWorkspacesWorkspaceProjectsProjectKeySecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspacesWorkspaceProjectsProjectKeySecurity struct {
    Option1 *GetWorkspacesWorkspaceProjectsProjectKeySecurityOption1 `security:"option"`
    Option2 *GetWorkspacesWorkspaceProjectsProjectKeySecurityOption2 `security:"option"`
    Option3 *GetWorkspacesWorkspaceProjectsProjectKeySecurityOption3 `security:"option"`
    
}

type GetWorkspacesWorkspaceProjectsProjectKeyRequest struct {
    PathParams GetWorkspacesWorkspaceProjectsProjectKeyPathParams 
    Security GetWorkspacesWorkspaceProjectsProjectKeySecurity 
    
}

type GetWorkspacesWorkspaceProjectsProjectKeyResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Project map[string]interface{} 
    
}

