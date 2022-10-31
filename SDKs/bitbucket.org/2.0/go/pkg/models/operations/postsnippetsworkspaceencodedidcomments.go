package operations

import (
"openapi/pkg/models/shared")

type PostSnippetsWorkspaceEncodedIDCommentsPathParams struct {
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostSnippetsWorkspaceEncodedIDCommentsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostSnippetsWorkspaceEncodedIDCommentsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostSnippetsWorkspaceEncodedIDCommentsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostSnippetsWorkspaceEncodedIDCommentsSecurity struct {
    Option1 *PostSnippetsWorkspaceEncodedIDCommentsSecurityOption1 `security:"option"`
    Option2 *PostSnippetsWorkspaceEncodedIDCommentsSecurityOption2 `security:"option"`
    Option3 *PostSnippetsWorkspaceEncodedIDCommentsSecurityOption3 `security:"option"`
    
}

type PostSnippetsWorkspaceEncodedIDCommentsRequest struct {
    PathParams PostSnippetsWorkspaceEncodedIDCommentsPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostSnippetsWorkspaceEncodedIDCommentsSecurity 
    
}

type PostSnippetsWorkspaceEncodedIDCommentsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    Snippet map[string]interface{} 
    
}

