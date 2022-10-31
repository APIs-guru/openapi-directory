package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamSeasonStatsQueryParams struct {
	Conference *string `queryParam:"style=form,explode=true,name=conference"`
	EndWeek    *int64  `queryParam:"style=form,explode=true,name=endWeek"`
	StartWeek  *int64  `queryParam:"style=form,explode=true,name=startWeek"`
	Team       *string `queryParam:"style=form,explode=true,name=team"`
	Year       *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetTeamSeasonStatsRequest struct {
	QueryParams GetTeamSeasonStatsQueryParams
}

type GetTeamSeasonStatsResponse struct {
	ContentType     string
	StatusCode      int64
	TeamSeasonStats []shared.TeamSeasonStat
}
