package operations

import (
"openapi/pkg/models/shared")

type GetSnippetsWorkspaceEncodedIDCommentsPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetSnippetsWorkspaceEncodedIDCommentsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetSnippetsWorkspaceEncodedIDCommentsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetSnippetsWorkspaceEncodedIDCommentsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSnippetsWorkspaceEncodedIDCommentsSecurity struct {
    Option1 *GetSnippetsWorkspaceEncodedIDCommentsSecurityOption1 `security:"option"`
    Option2 *GetSnippetsWorkspaceEncodedIDCommentsSecurityOption2 `security:"option"`
    Option3 *GetSnippetsWorkspaceEncodedIDCommentsSecurityOption3 `security:"option"`
    
}

type GetSnippetsWorkspaceEncodedIDCommentsRequest struct {
    PathParams GetSnippetsWorkspaceEncodedIDCommentsPathParams 
    Security GetSnippetsWorkspaceEncodedIDCommentsSecurity 
    
}

type GetSnippetsWorkspaceEncodedIDCommentsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedSnippetComments *shared.PaginatedSnippetComments 
    
}

