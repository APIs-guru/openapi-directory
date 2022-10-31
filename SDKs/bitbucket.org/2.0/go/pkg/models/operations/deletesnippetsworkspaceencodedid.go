package operations

import (
"openapi/pkg/models/shared")

type DeleteSnippetsWorkspaceEncodedIDPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteSnippetsWorkspaceEncodedIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteSnippetsWorkspaceEncodedIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSnippetsWorkspaceEncodedIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteSnippetsWorkspaceEncodedIDSecurity struct {
    Option1 *DeleteSnippetsWorkspaceEncodedIDSecurityOption1 `security:"option"`
    Option2 *DeleteSnippetsWorkspaceEncodedIDSecurityOption2 `security:"option"`
    Option3 *DeleteSnippetsWorkspaceEncodedIDSecurityOption3 `security:"option"`
    
}

type DeleteSnippetsWorkspaceEncodedIDRequest struct {
    PathParams DeleteSnippetsWorkspaceEncodedIDPathParams 
    Security DeleteSnippetsWorkspaceEncodedIDSecurity 
    
}

type DeleteSnippetsWorkspaceEncodedIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

