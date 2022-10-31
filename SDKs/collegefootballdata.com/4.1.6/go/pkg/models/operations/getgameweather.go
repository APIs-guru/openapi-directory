package operations

import (
	"openapi/pkg/models/shared"
)

type GetGameWeatherQueryParams struct {
	Conference *string `queryParam:"style=form,explode=true,name=conference"`
	SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
	Team       *string `queryParam:"style=form,explode=true,name=team"`
	Week       *int64  `queryParam:"style=form,explode=true,name=week"`
	Year       int64   `queryParam:"style=form,explode=true,name=year"`
}

type GetGameWeatherRequest struct {
	QueryParams GetGameWeatherQueryParams
}

type GetGameWeatherResponse struct {
	ContentType  string
	GameWeathers []shared.GameWeather
	StatusCode   int64
}
