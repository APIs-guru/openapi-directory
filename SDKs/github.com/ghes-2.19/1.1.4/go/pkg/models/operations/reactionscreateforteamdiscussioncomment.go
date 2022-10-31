package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsCreateForTeamDiscussionCommentPathParams struct {
	CommentNumber    int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type ReactionsCreateForTeamDiscussionCommentHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum string

const (
	ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnumPlus1    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = "+1"
	ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnumMinus1   ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = "-1"
	ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnumLaugh    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = "laugh"
	ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnumConfused ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = "confused"
	ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnumHeart    ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = "heart"
	ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnumHooray   ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = "hooray"
	ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnumRocket   ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = "rocket"
	ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnumEyes     ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum = "eyes"
)

type ReactionsCreateForTeamDiscussionCommentRequestBody struct {
	Content ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum `json:"content"`
}

type ReactionsCreateForTeamDiscussionCommentRequest struct {
	PathParams ReactionsCreateForTeamDiscussionCommentPathParams
	Headers    ReactionsCreateForTeamDiscussionCommentHeaders
	Request    *ReactionsCreateForTeamDiscussionCommentRequestBody `request:"mediaType=application/json"`
}

type ReactionsCreateForTeamDiscussionCommentResponse struct {
	ContentType string
	StatusCode  int64
	Reaction    *shared.Reaction
}
