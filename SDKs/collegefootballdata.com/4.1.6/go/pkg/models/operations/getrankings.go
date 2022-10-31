package operations

import (
	"openapi/pkg/models/shared"
)

type GetRankingsQueryParams struct {
	SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
	Week       *int64  `queryParam:"style=form,explode=true,name=week"`
	Year       int64   `queryParam:"style=form,explode=true,name=year"`
}

type GetRankingsRequest struct {
	QueryParams GetRankingsQueryParams
}

type GetRankingsResponse struct {
	ContentType  string
	RankingWeeks []shared.RankingWeek
	StatusCode   int64
}
