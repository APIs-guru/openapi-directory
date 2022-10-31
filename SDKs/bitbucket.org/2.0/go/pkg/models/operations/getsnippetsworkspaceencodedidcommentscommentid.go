package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity struct {
	Option1 *GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1 `security:"option"`
	Option2 *GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2 `security:"option"`
	Option3 *GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3 `security:"option"`
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
