package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvgSalePriceSalePriceGetQueryParams struct {
	BrandName  string  `queryParam:"style=form,explode=true,name=brandName"`
	Jwt        string  `queryParam:"style=form,explode=true,name=jwt"`
	RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
}

type GetAvgSalePriceSalePriceGetRequest struct {
	QueryParams GetAvgSalePriceSalePriceGetQueryParams
}

type GetAvgSalePriceSalePriceGetResponse struct {
	BasicModelStatsResp *shared.BasicModelStatsResp
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
