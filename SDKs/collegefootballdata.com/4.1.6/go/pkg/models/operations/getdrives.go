package operations

import (
	"openapi/pkg/models/shared"
)

type GetDrivesQueryParams struct {
	Conference        *string `queryParam:"style=form,explode=true,name=conference"`
	Defense           *string `queryParam:"style=form,explode=true,name=defense"`
	DefenseConference *string `queryParam:"style=form,explode=true,name=defenseConference"`
	Offense           *string `queryParam:"style=form,explode=true,name=offense"`
	OffenseConference *string `queryParam:"style=form,explode=true,name=offenseConference"`
	SeasonType        *string `queryParam:"style=form,explode=true,name=seasonType"`
	Team              *string `queryParam:"style=form,explode=true,name=team"`
	Week              *int64  `queryParam:"style=form,explode=true,name=week"`
	Year              int64   `queryParam:"style=form,explode=true,name=year"`
}

type GetDrivesRequest struct {
	QueryParams GetDrivesQueryParams
}

type GetDrivesResponse struct {
	ContentType string
	Drives      []shared.Drive
	StatusCode  int64
}
