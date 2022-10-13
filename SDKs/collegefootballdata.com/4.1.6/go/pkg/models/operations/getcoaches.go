package operations

import (
	"openapi/pkg/models/shared"
)

type GetCoachesQueryParams struct {
	FirstName *string `queryParam:"style=form,explode=true,name=firstName"`
	LastName  *string `queryParam:"style=form,explode=true,name=lastName"`
	MaxYear   *int64  `queryParam:"style=form,explode=true,name=maxYear"`
	MinYear   *int64  `queryParam:"style=form,explode=true,name=minYear"`
	Team      *string `queryParam:"style=form,explode=true,name=team"`
	Year      *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetCoachesRequest struct {
	QueryParams GetCoachesQueryParams
}

type GetCoachesResponse struct {
	Coaches     []shared.Coach
	ContentType string
	StatusCode  int64
}
