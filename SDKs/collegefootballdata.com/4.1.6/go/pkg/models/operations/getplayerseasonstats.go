package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlayerSeasonStatsQueryParams struct {
	Category   *string `queryParam:"style=form,explode=true,name=category"`
	Conference *string `queryParam:"style=form,explode=true,name=conference"`
	EndWeek    *int64  `queryParam:"style=form,explode=true,name=endWeek"`
	SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
	StartWeek  *int64  `queryParam:"style=form,explode=true,name=startWeek"`
	Team       *string `queryParam:"style=form,explode=true,name=team"`
	Year       int64   `queryParam:"style=form,explode=true,name=year"`
}

type GetPlayerSeasonStatsRequest struct {
	QueryParams GetPlayerSeasonStatsQueryParams
}

type GetPlayerSeasonStatsResponse struct {
	ContentType       string
	PlayerSeasonStats []shared.PlayerSeasonStat
	StatusCode        int64
}
