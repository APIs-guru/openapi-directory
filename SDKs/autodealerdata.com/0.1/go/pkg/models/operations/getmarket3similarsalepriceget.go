package operations

import (
	"openapi/pkg/models/shared"
)

type GetMarket3SimilarSalePriceGetQueryParams struct {
	DaysBack   *int64  `queryParam:"style=form,explode=true,name=daysBack"`
	Jwt        string  `queryParam:"style=form,explode=true,name=jwt"`
	RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
	SameYear   *bool   `queryParam:"style=form,explode=true,name=sameYear"`
	Vin        string  `queryParam:"style=form,explode=true,name=vin"`
}

type GetMarket3SimilarSalePriceGetRequest struct {
	QueryParams GetMarket3SimilarSalePriceGetQueryParams
}

type GetMarket3SimilarSalePriceGetResponse struct {
	ContentType          string
	HTTPValidationError  *shared.HTTPValidationError
	SimilarSalePriceResp *shared.SimilarSalePriceResp
	StatusCode           int64
}
