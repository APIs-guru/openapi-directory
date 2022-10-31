package operations

import (
	"openapi/pkg/models/shared"
)

type GetPregameWinProbabilitiesQueryParams struct {
	SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
	Team       *string `queryParam:"style=form,explode=true,name=team"`
	Week       *int64  `queryParam:"style=form,explode=true,name=week"`
	Year       *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetPregameWinProbabilitiesRequest struct {
	QueryParams GetPregameWinProbabilitiesQueryParams
}

type GetPregameWinProbabilitiesResponse struct {
	ContentType string
	PregameWps  []shared.PregameWp
	StatusCode  int64
}
