package operations

import (
"openapi/pkg/models/shared")

type GetSnippetsWorkspaceEncodedIDNodeIDPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetSnippetsWorkspaceEncodedIDNodeIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetSnippetsWorkspaceEncodedIDNodeIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetSnippetsWorkspaceEncodedIDNodeIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSnippetsWorkspaceEncodedIDNodeIDSecurity struct {
    Option1 *GetSnippetsWorkspaceEncodedIDNodeIDSecurityOption1 `security:"option"`
    Option2 *GetSnippetsWorkspaceEncodedIDNodeIDSecurityOption2 `security:"option"`
    Option3 *GetSnippetsWorkspaceEncodedIDNodeIDSecurityOption3 `security:"option"`
    
}

type GetSnippetsWorkspaceEncodedIDNodeIDRequest struct {
    PathParams GetSnippetsWorkspaceEncodedIDNodeIDPathParams 
    Security GetSnippetsWorkspaceEncodedIDNodeIDSecurity 
    
}

type GetSnippetsWorkspaceEncodedIDNodeIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Snippet map[string]interface{} 
    
}

