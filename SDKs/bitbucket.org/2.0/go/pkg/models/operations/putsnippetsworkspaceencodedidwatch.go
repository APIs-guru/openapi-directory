package operations

import (
"openapi/pkg/models/shared")

type PutSnippetsWorkspaceEncodedIDWatchPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PutSnippetsWorkspaceEncodedIDWatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PutSnippetsWorkspaceEncodedIDWatchSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PutSnippetsWorkspaceEncodedIDWatchSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutSnippetsWorkspaceEncodedIDWatchSecurity struct {
    Option1 *PutSnippetsWorkspaceEncodedIDWatchSecurityOption1 `security:"option"`
    Option2 *PutSnippetsWorkspaceEncodedIDWatchSecurityOption2 `security:"option"`
    Option3 *PutSnippetsWorkspaceEncodedIDWatchSecurityOption3 `security:"option"`
    
}

type PutSnippetsWorkspaceEncodedIDWatchRequest struct {
    PathParams PutSnippetsWorkspaceEncodedIDWatchPathParams 
    Security PutSnippetsWorkspaceEncodedIDWatchSecurity 
    
}

type PutSnippetsWorkspaceEncodedIDWatchResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedUsers *shared.PaginatedUsers 
    
}

