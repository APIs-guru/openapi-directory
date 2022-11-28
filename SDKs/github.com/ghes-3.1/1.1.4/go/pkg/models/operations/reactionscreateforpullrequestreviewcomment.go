package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsCreateForPullRequestReviewCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum string

const (
	ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumPlus1    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = "+1"
	ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumMinus1   ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = "-1"
	ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumLaugh    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = "laugh"
	ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumConfused ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = "confused"
	ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumHeart    ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = "heart"
	ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumHooray   ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = "hooray"
	ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumRocket   ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = "rocket"
	ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnumEyes     ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = "eyes"
)

type ReactionsCreateForPullRequestReviewCommentRequestBody struct {
	Content ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum `json:"content"`
}

type ReactionsCreateForPullRequestReviewComment415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReactionsCreateForPullRequestReviewCommentRequest struct {
	PathParams ReactionsCreateForPullRequestReviewCommentPathParams
	Request    *ReactionsCreateForPullRequestReviewCommentRequestBody `request:"mediaType=application/json"`
}

type ReactionsCreateForPullRequestReviewCommentResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	Reaction                                                           *shared.Reaction
	ReactionsCreateForPullRequestReviewComment415ApplicationJSONObject *ReactionsCreateForPullRequestReviewComment415ApplicationJSON
	ValidationError                                                    *shared.ValidationError
}
