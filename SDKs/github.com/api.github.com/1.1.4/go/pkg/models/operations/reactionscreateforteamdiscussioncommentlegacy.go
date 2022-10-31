package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsCreateForTeamDiscussionCommentLegacyPathParams struct {
	CommentNumber    int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum string

const (
	ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumPlus1    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = "+1"
	ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumMinus1   ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = "-1"
	ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumLaugh    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = "laugh"
	ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumConfused ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = "confused"
	ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumHeart    ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = "heart"
	ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumHooray   ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = "hooray"
	ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumRocket   ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = "rocket"
	ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnumEyes     ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = "eyes"
)

type ReactionsCreateForTeamDiscussionCommentLegacyRequestBody struct {
	Content ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum `json:"content"`
}

type ReactionsCreateForTeamDiscussionCommentLegacyRequest struct {
	PathParams ReactionsCreateForTeamDiscussionCommentLegacyPathParams
	Request    *ReactionsCreateForTeamDiscussionCommentLegacyRequestBody `request:"mediaType=application/json"`
}

type ReactionsCreateForTeamDiscussionCommentLegacyResponse struct {
	ContentType string
	StatusCode  int64
	Reaction    *shared.Reaction
}
