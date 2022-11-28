package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsCreateForCommitCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsCreateForCommitCommentRequestBodyContentEnum string

const (
	ReactionsCreateForCommitCommentRequestBodyContentEnumPlus1    ReactionsCreateForCommitCommentRequestBodyContentEnum = "+1"
	ReactionsCreateForCommitCommentRequestBodyContentEnumMinus1   ReactionsCreateForCommitCommentRequestBodyContentEnum = "-1"
	ReactionsCreateForCommitCommentRequestBodyContentEnumLaugh    ReactionsCreateForCommitCommentRequestBodyContentEnum = "laugh"
	ReactionsCreateForCommitCommentRequestBodyContentEnumConfused ReactionsCreateForCommitCommentRequestBodyContentEnum = "confused"
	ReactionsCreateForCommitCommentRequestBodyContentEnumHeart    ReactionsCreateForCommitCommentRequestBodyContentEnum = "heart"
	ReactionsCreateForCommitCommentRequestBodyContentEnumHooray   ReactionsCreateForCommitCommentRequestBodyContentEnum = "hooray"
	ReactionsCreateForCommitCommentRequestBodyContentEnumRocket   ReactionsCreateForCommitCommentRequestBodyContentEnum = "rocket"
	ReactionsCreateForCommitCommentRequestBodyContentEnumEyes     ReactionsCreateForCommitCommentRequestBodyContentEnum = "eyes"
)

type ReactionsCreateForCommitCommentRequestBody struct {
	Content ReactionsCreateForCommitCommentRequestBodyContentEnum `json:"content"`
}

type ReactionsCreateForCommitComment415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReactionsCreateForCommitCommentRequest struct {
	PathParams ReactionsCreateForCommitCommentPathParams
	Request    *ReactionsCreateForCommitCommentRequestBody `request:"mediaType=application/json"`
}

type ReactionsCreateForCommitCommentResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	Reaction                                                *shared.Reaction
	ReactionsCreateForCommitComment415ApplicationJSONObject *ReactionsCreateForCommitComment415ApplicationJSON
	ValidationError                                         *shared.ValidationError
}
