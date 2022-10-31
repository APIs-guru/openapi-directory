package operations

import (
	"openapi/pkg/models/shared"
)

type GetPopularCarsCarTypeEnum string

const (
	GetPopularCarsCarTypeEnumNew  GetPopularCarsCarTypeEnum = "new"
	GetPopularCarsCarTypeEnumUsed GetPopularCarsCarTypeEnum = "used"
)

type GetPopularCarsCountryEnum string

const (
	GetPopularCarsCountryEnumUsLower GetPopularCarsCountryEnum = "us"
	GetPopularCarsCountryEnumCaLower GetPopularCarsCountryEnum = "ca"
	GetPopularCarsCountryEnumUsUpper GetPopularCarsCountryEnum = "US"
	GetPopularCarsCountryEnumCaUpper GetPopularCarsCountryEnum = "CA"
)

type GetPopularCarsQueryParams struct {
	APIKey    *string                    `queryParam:"style=form,explode=true,name=api_key"`
	CarType   GetPopularCarsCarTypeEnum  `queryParam:"style=form,explode=true,name=car_type"`
	CityState *string                    `queryParam:"style=form,explode=true,name=city_state"`
	Country   *GetPopularCarsCountryEnum `queryParam:"style=form,explode=true,name=country"`
	State     *string                    `queryParam:"style=form,explode=true,name=state"`
}

type GetPopularCarsRequest struct {
	QueryParams GetPopularCarsQueryParams
}

type GetPopularCarsResponse struct {
	ContentType string
	Error       *shared.Error
	PopularCars *shared.PopularCars
	StatusCode  int64
}
