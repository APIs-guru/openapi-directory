package operations

import (
"openapi/pkg/models/shared")

type GetTeamGameStatsQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    GameID *int64 `queryParam:"style=form,explode=true,name=gameId"`
    SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Week *int64 `queryParam:"style=form,explode=true,name=week"`
    Year int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetTeamGameStatsRequest struct {
    QueryParams GetTeamGameStatsQueryParams 
    
}

type GetTeamGameStatsResponse struct {
    ContentType string 
    StatusCode int64 
    TeamGames []shared.TeamGame 
    
}

