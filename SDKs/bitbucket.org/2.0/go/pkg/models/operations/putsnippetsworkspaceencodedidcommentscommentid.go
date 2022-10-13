package operations

import (
	"openapi/pkg/models/shared"
)

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity struct {
	Option1 *PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1 `security:"option"`
	Option2 *PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2 `security:"option"`
	Option3 *PutSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3 `security:"option"`
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
