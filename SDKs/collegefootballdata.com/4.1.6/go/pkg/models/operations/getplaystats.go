package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlayStatsQueryParams struct {
	AthleteID  *int64  `queryParam:"style=form,explode=true,name=athleteId"`
	Conference *string `queryParam:"style=form,explode=true,name=conference"`
	GameID     *int64  `queryParam:"style=form,explode=true,name=gameId"`
	SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
	StatTypeID *int64  `queryParam:"style=form,explode=true,name=statTypeId"`
	Team       *string `queryParam:"style=form,explode=true,name=team"`
	Week       *int64  `queryParam:"style=form,explode=true,name=week"`
	Year       *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetPlayStatsRequest struct {
	QueryParams GetPlayStatsQueryParams
}

type GetPlayStatsResponse struct {
	ContentType string
	PlayStats   []shared.PlayStat
	StatusCode  int64
}
