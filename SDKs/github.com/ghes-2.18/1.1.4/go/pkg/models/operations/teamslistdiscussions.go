package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListDiscussionsPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListDiscussionsQueryParams struct {
	Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListDiscussionsHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type TeamsListDiscussionsRequest struct {
	PathParams  TeamsListDiscussionsPathParams
	QueryParams TeamsListDiscussionsQueryParams
	Headers     TeamsListDiscussionsHeaders
}

type TeamsListDiscussionsResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	TeamDiscussions []shared.TeamDiscussion
}
