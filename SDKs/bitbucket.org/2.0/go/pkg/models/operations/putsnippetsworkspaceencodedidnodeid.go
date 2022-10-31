package operations

import (
"openapi/pkg/models/shared")

type PutSnippetsWorkspaceEncodedIDNodeIDPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutSnippetsWorkspaceEncodedIDNodeIDSecurity struct {
    Option1 *PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption1 `security:"option"`
    Option2 *PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption2 `security:"option"`
    Option3 *PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption3 `security:"option"`
    
}

type PutSnippetsWorkspaceEncodedIDNodeIDRequest struct {
    PathParams PutSnippetsWorkspaceEncodedIDNodeIDPathParams 
    Security PutSnippetsWorkspaceEncodedIDNodeIDSecurity 
    
}

type PutSnippetsWorkspaceEncodedIDNodeIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Snippet map[string]interface{} 
    
}

