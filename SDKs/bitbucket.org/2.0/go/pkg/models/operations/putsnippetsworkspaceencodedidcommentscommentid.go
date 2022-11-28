package operations

import (
	"openapi/pkg/models/shared"
)

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDRequest struct {
	PathParams PutSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams
	Security   PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity
}

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
