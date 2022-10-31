package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForTeamDiscussionPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type ReactionsListForTeamDiscussionContentEnum string

const (
	ReactionsListForTeamDiscussionContentEnumPlus1    ReactionsListForTeamDiscussionContentEnum = "+1"
	ReactionsListForTeamDiscussionContentEnumMinus1   ReactionsListForTeamDiscussionContentEnum = "-1"
	ReactionsListForTeamDiscussionContentEnumLaugh    ReactionsListForTeamDiscussionContentEnum = "laugh"
	ReactionsListForTeamDiscussionContentEnumConfused ReactionsListForTeamDiscussionContentEnum = "confused"
	ReactionsListForTeamDiscussionContentEnumHeart    ReactionsListForTeamDiscussionContentEnum = "heart"
	ReactionsListForTeamDiscussionContentEnumHooray   ReactionsListForTeamDiscussionContentEnum = "hooray"
	ReactionsListForTeamDiscussionContentEnumRocket   ReactionsListForTeamDiscussionContentEnum = "rocket"
	ReactionsListForTeamDiscussionContentEnumEyes     ReactionsListForTeamDiscussionContentEnum = "eyes"
)

type ReactionsListForTeamDiscussionQueryParams struct {
	Content *ReactionsListForTeamDiscussionContentEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                                     `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                     `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForTeamDiscussionHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type ReactionsListForTeamDiscussionRequest struct {
	PathParams  ReactionsListForTeamDiscussionPathParams
	QueryParams ReactionsListForTeamDiscussionQueryParams
	Headers     ReactionsListForTeamDiscussionHeaders
}

type ReactionsListForTeamDiscussionResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Reactions   []shared.Reaction
}
