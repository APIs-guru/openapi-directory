package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsCreateForIssueCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsCreateForIssueCommentRequestBodyContentEnum string

const (
	ReactionsCreateForIssueCommentRequestBodyContentEnumPlus1    ReactionsCreateForIssueCommentRequestBodyContentEnum = "+1"
	ReactionsCreateForIssueCommentRequestBodyContentEnumMinus1   ReactionsCreateForIssueCommentRequestBodyContentEnum = "-1"
	ReactionsCreateForIssueCommentRequestBodyContentEnumLaugh    ReactionsCreateForIssueCommentRequestBodyContentEnum = "laugh"
	ReactionsCreateForIssueCommentRequestBodyContentEnumConfused ReactionsCreateForIssueCommentRequestBodyContentEnum = "confused"
	ReactionsCreateForIssueCommentRequestBodyContentEnumHeart    ReactionsCreateForIssueCommentRequestBodyContentEnum = "heart"
	ReactionsCreateForIssueCommentRequestBodyContentEnumHooray   ReactionsCreateForIssueCommentRequestBodyContentEnum = "hooray"
	ReactionsCreateForIssueCommentRequestBodyContentEnumRocket   ReactionsCreateForIssueCommentRequestBodyContentEnum = "rocket"
	ReactionsCreateForIssueCommentRequestBodyContentEnumEyes     ReactionsCreateForIssueCommentRequestBodyContentEnum = "eyes"
)

type ReactionsCreateForIssueCommentRequestBody struct {
	Content ReactionsCreateForIssueCommentRequestBodyContentEnum `json:"content"`
}

type ReactionsCreateForIssueComment415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReactionsCreateForIssueCommentRequest struct {
	PathParams ReactionsCreateForIssueCommentPathParams
	Request    *ReactionsCreateForIssueCommentRequestBody `request:"mediaType=application/json"`
}

type ReactionsCreateForIssueCommentResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	Reaction                                               *shared.Reaction
	ReactionsCreateForIssueComment415ApplicationJSONObject *ReactionsCreateForIssueComment415ApplicationJSON
	ValidationError                                        *shared.ValidationError
}
