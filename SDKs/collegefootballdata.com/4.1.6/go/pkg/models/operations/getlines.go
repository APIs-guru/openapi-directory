package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinesQueryParams struct {
	Away       *string `queryParam:"style=form,explode=true,name=away"`
	Conference *string `queryParam:"style=form,explode=true,name=conference"`
	GameID     *int64  `queryParam:"style=form,explode=true,name=gameId"`
	Home       *string `queryParam:"style=form,explode=true,name=home"`
	SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
	Team       *string `queryParam:"style=form,explode=true,name=team"`
	Week       *int64  `queryParam:"style=form,explode=true,name=week"`
	Year       *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetLinesRequest struct {
	QueryParams GetLinesQueryParams
}

type GetLinesResponse struct {
	ContentType string
	GameLines   []shared.GameLines
	StatusCode  int64
}
