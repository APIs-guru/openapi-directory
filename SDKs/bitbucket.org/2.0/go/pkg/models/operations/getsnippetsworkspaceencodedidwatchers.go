package operations

import (
"openapi/pkg/models/shared")

type GetSnippetsWorkspaceEncodedIDWatchersPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetSnippetsWorkspaceEncodedIDWatchersSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetSnippetsWorkspaceEncodedIDWatchersSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetSnippetsWorkspaceEncodedIDWatchersSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSnippetsWorkspaceEncodedIDWatchersSecurity struct {
    Option1 *GetSnippetsWorkspaceEncodedIDWatchersSecurityOption1 `security:"option"`
    Option2 *GetSnippetsWorkspaceEncodedIDWatchersSecurityOption2 `security:"option"`
    Option3 *GetSnippetsWorkspaceEncodedIDWatchersSecurityOption3 `security:"option"`
    
}

type GetSnippetsWorkspaceEncodedIDWatchersRequest struct {
    PathParams GetSnippetsWorkspaceEncodedIDWatchersPathParams 
    Security GetSnippetsWorkspaceEncodedIDWatchersSecurity 
    
}

type GetSnippetsWorkspaceEncodedIDWatchersResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedUsers *shared.PaginatedUsers 
    
}

