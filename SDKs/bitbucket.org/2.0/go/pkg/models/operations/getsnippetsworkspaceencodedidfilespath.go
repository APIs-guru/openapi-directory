package operations

import (
"openapi/pkg/models/shared")

type GetSnippetsWorkspaceEncodedIDFilesPathPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Path string `pathParam:"style=simple,explode=false,name=path"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetSnippetsWorkspaceEncodedIDFilesPathSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetSnippetsWorkspaceEncodedIDFilesPathSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetSnippetsWorkspaceEncodedIDFilesPathSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSnippetsWorkspaceEncodedIDFilesPathSecurity struct {
    Option1 *GetSnippetsWorkspaceEncodedIDFilesPathSecurityOption1 `security:"option"`
    Option2 *GetSnippetsWorkspaceEncodedIDFilesPathSecurityOption2 `security:"option"`
    Option3 *GetSnippetsWorkspaceEncodedIDFilesPathSecurityOption3 `security:"option"`
    
}

type GetSnippetsWorkspaceEncodedIDFilesPathRequest struct {
    PathParams GetSnippetsWorkspaceEncodedIDFilesPathPathParams 
    Security GetSnippetsWorkspaceEncodedIDFilesPathSecurity 
    
}

type GetSnippetsWorkspaceEncodedIDFilesPathResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

