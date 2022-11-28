package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDRequest struct {
	PathParams GetSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams
	Security   GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity
}

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	SnippetComment map[string]interface{}
}
