package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlaysQueryParams struct {
	Conference        *string `queryParam:"style=form,explode=true,name=conference"`
	Defense           *string `queryParam:"style=form,explode=true,name=defense"`
	DefenseConference *string `queryParam:"style=form,explode=true,name=defenseConference"`
	Offense           *string `queryParam:"style=form,explode=true,name=offense"`
	OffenseConference *string `queryParam:"style=form,explode=true,name=offenseConference"`
	PlayType          *int64  `queryParam:"style=form,explode=true,name=playType"`
	SeasonType        *string `queryParam:"style=form,explode=true,name=seasonType"`
	Team              *string `queryParam:"style=form,explode=true,name=team"`
	Week              int64   `queryParam:"style=form,explode=true,name=week"`
	Year              int64   `queryParam:"style=form,explode=true,name=year"`
}

type GetPlaysRequest struct {
	QueryParams GetPlaysQueryParams
}

type GetPlaysResponse struct {
	ContentType string
	Plays       []shared.Play
	StatusCode  int64
}
