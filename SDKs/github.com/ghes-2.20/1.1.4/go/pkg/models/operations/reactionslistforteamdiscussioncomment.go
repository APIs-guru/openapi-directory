package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForTeamDiscussionCommentPathParams struct {
	CommentNumber    int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type ReactionsListForTeamDiscussionCommentContentEnum string

const (
	ReactionsListForTeamDiscussionCommentContentEnumPlus1    ReactionsListForTeamDiscussionCommentContentEnum = "+1"
	ReactionsListForTeamDiscussionCommentContentEnumMinus1   ReactionsListForTeamDiscussionCommentContentEnum = "-1"
	ReactionsListForTeamDiscussionCommentContentEnumLaugh    ReactionsListForTeamDiscussionCommentContentEnum = "laugh"
	ReactionsListForTeamDiscussionCommentContentEnumConfused ReactionsListForTeamDiscussionCommentContentEnum = "confused"
	ReactionsListForTeamDiscussionCommentContentEnumHeart    ReactionsListForTeamDiscussionCommentContentEnum = "heart"
	ReactionsListForTeamDiscussionCommentContentEnumHooray   ReactionsListForTeamDiscussionCommentContentEnum = "hooray"
	ReactionsListForTeamDiscussionCommentContentEnumRocket   ReactionsListForTeamDiscussionCommentContentEnum = "rocket"
	ReactionsListForTeamDiscussionCommentContentEnumEyes     ReactionsListForTeamDiscussionCommentContentEnum = "eyes"
)

type ReactionsListForTeamDiscussionCommentQueryParams struct {
	Content *ReactionsListForTeamDiscussionCommentContentEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                                            `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                            `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForTeamDiscussionCommentHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type ReactionsListForTeamDiscussionCommentRequest struct {
	PathParams  ReactionsListForTeamDiscussionCommentPathParams
	QueryParams ReactionsListForTeamDiscussionCommentQueryParams
	Headers     ReactionsListForTeamDiscussionCommentHeaders
}

type ReactionsListForTeamDiscussionCommentResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Reactions   []shared.Reaction
}
