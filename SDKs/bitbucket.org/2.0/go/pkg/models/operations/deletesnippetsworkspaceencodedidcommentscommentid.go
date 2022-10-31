package operations

import (
"openapi/pkg/models/shared")

type DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams struct {
    CommentID int64 `pathParam:"style=simple,explode=false,name=comment_id"`
    EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity struct {
    Option1 *DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1 `security:"option"`
    Option2 *DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2 `security:"option"`
    Option3 *DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3 `security:"option"`
    
}

type DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDRequest struct {
    PathParams DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams 
    Security DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity 
    
}

type DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

