package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsCreateForTeamDiscussionCommentInOrgPathParams struct {
	CommentNumber    int64  `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum string

const (
	ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumPlus1    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = "+1"
	ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumMinus1   ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = "-1"
	ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumLaugh    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = "laugh"
	ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumConfused ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = "confused"
	ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumHeart    ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = "heart"
	ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumHooray   ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = "hooray"
	ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumRocket   ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = "rocket"
	ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnumEyes     ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum = "eyes"
)

type ReactionsCreateForTeamDiscussionCommentInOrgRequestBody struct {
	Content ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum `json:"content"`
}

type ReactionsCreateForTeamDiscussionCommentInOrgRequest struct {
	PathParams ReactionsCreateForTeamDiscussionCommentInOrgPathParams
	Request    *ReactionsCreateForTeamDiscussionCommentInOrgRequestBody `request:"mediaType=application/json"`
}

type ReactionsCreateForTeamDiscussionCommentInOrgResponse struct {
	ContentType string
	StatusCode  int64
	Reaction    *shared.Reaction
}
