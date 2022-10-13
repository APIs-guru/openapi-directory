package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMatchupQueryParams struct {
	MaxYear *int64 `queryParam:"style=form,explode=true,name=maxYear"`
	MinYear *int64 `queryParam:"style=form,explode=true,name=minYear"`
	Team1   string `queryParam:"style=form,explode=true,name=team1"`
	Team2   string `queryParam:"style=form,explode=true,name=team2"`
}

type GetTeamMatchupRequest struct {
	QueryParams GetTeamMatchupQueryParams
}

type GetTeamMatchupResponse struct {
	ContentType string
	StatusCode  int64
	TeamMatchup *shared.TeamMatchup
}
