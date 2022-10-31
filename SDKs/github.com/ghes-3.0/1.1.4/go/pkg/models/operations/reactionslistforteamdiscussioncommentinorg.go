package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForTeamDiscussionCommentInOrgPathParams struct {
	CommentNumber    int64  `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type ReactionsListForTeamDiscussionCommentInOrgContentEnum string

const (
	ReactionsListForTeamDiscussionCommentInOrgContentEnumPlus1    ReactionsListForTeamDiscussionCommentInOrgContentEnum = "+1"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumMinus1   ReactionsListForTeamDiscussionCommentInOrgContentEnum = "-1"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumLaugh    ReactionsListForTeamDiscussionCommentInOrgContentEnum = "laugh"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumConfused ReactionsListForTeamDiscussionCommentInOrgContentEnum = "confused"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumHeart    ReactionsListForTeamDiscussionCommentInOrgContentEnum = "heart"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumHooray   ReactionsListForTeamDiscussionCommentInOrgContentEnum = "hooray"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumRocket   ReactionsListForTeamDiscussionCommentInOrgContentEnum = "rocket"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumEyes     ReactionsListForTeamDiscussionCommentInOrgContentEnum = "eyes"
)

type ReactionsListForTeamDiscussionCommentInOrgQueryParams struct {
	Content *ReactionsListForTeamDiscussionCommentInOrgContentEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                                                 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                                 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForTeamDiscussionCommentInOrgRequest struct {
	PathParams  ReactionsListForTeamDiscussionCommentInOrgPathParams
	QueryParams ReactionsListForTeamDiscussionCommentInOrgQueryParams
}

type ReactionsListForTeamDiscussionCommentInOrgResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Reactions   []shared.Reaction
}
