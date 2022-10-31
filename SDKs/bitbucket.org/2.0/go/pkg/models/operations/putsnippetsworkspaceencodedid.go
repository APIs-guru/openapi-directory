package operations

import (
"openapi/pkg/models/shared")

type PutSnippetsWorkspaceEncodedIDPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutSnippetsWorkspaceEncodedIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutSnippetsWorkspaceEncodedIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutSnippetsWorkspaceEncodedIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutSnippetsWorkspaceEncodedIDSecurity struct {
    Option1 *PutSnippetsWorkspaceEncodedIDSecurityOption1 `security:"option"`
    Option2 *PutSnippetsWorkspaceEncodedIDSecurityOption2 `security:"option"`
    Option3 *PutSnippetsWorkspaceEncodedIDSecurityOption3 `security:"option"`
    
}

type PutSnippetsWorkspaceEncodedIDRequest struct {
    PathParams PutSnippetsWorkspaceEncodedIDPathParams 
    Security PutSnippetsWorkspaceEncodedIDSecurity 
    
}

type PutSnippetsWorkspaceEncodedIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Snippet map[string]interface{} 
    
}

