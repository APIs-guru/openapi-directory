package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListDiscussionCommentsLegacyPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListDiscussionCommentsLegacyQueryParams struct {
	Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListDiscussionCommentsLegacyRequest struct {
	PathParams  TeamsListDiscussionCommentsLegacyPathParams
	QueryParams TeamsListDiscussionCommentsLegacyQueryParams
}

type TeamsListDiscussionCommentsLegacyResponse struct {
	ContentType            string
	Headers                map[string][]string
	StatusCode             int64
	TeamDiscussionComments []shared.TeamDiscussionComment
}
