package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlayerGameStatsQueryParams struct {
	Category   *string `queryParam:"style=form,explode=true,name=category"`
	Conference *string `queryParam:"style=form,explode=true,name=conference"`
	GameID     *int64  `queryParam:"style=form,explode=true,name=gameId"`
	SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
	Team       *string `queryParam:"style=form,explode=true,name=team"`
	Week       *int64  `queryParam:"style=form,explode=true,name=week"`
	Year       int64   `queryParam:"style=form,explode=true,name=year"`
}

type GetPlayerGameStatsRequest struct {
	QueryParams GetPlayerGameStatsQueryParams
}

type GetPlayerGameStatsResponse struct {
	ContentType string
	PlayerGames []shared.PlayerGame
	StatusCode  int64
}
