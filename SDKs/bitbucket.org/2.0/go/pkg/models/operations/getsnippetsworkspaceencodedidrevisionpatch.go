package operations

import (
"openapi/pkg/models/shared")

type GetSnippetsWorkspaceEncodedIDRevisionPatchPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Revision string `pathParam:"style=simple,explode=false,name=revision"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchSecurity struct {
    Option1 *GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption1 `security:"option"`
    Option2 *GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption2 `security:"option"`
    Option3 *GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption3 `security:"option"`
    
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchRequest struct {
    PathParams GetSnippetsWorkspaceEncodedIDRevisionPatchPathParams 
    Security GetSnippetsWorkspaceEncodedIDRevisionPatchSecurity 
    
}

type GetSnippetsWorkspaceEncodedIDRevisionPatchResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

