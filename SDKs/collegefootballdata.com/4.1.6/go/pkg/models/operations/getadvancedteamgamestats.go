package operations

import (
	"openapi/pkg/models/shared"
)

type GetAdvancedTeamGameStatsQueryParams struct {
	ExcludeGarbageTime *bool   `queryParam:"style=form,explode=true,name=excludeGarbageTime"`
	Opponent           *string `queryParam:"style=form,explode=true,name=opponent"`
	SeasonType         *string `queryParam:"style=form,explode=true,name=seasonType"`
	Team               *string `queryParam:"style=form,explode=true,name=team"`
	Week               *int64  `queryParam:"style=form,explode=true,name=week"`
	Year               *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetAdvancedTeamGameStatsRequest struct {
	QueryParams GetAdvancedTeamGameStatsQueryParams
}

type GetAdvancedTeamGameStatsResponse struct {
	AdvancedGameStats []shared.AdvancedGameStat
	ContentType       string
	StatusCode        int64
}
