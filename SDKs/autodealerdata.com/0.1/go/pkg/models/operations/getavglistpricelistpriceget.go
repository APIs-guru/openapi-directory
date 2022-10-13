package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvgListPriceListPriceGetQueryParams struct {
	BrandName  string  `queryParam:"style=form,explode=true,name=brandName"`
	Jwt        string  `queryParam:"style=form,explode=true,name=jwt"`
	RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
}

type GetAvgListPriceListPriceGetRequest struct {
	QueryParams GetAvgListPriceListPriceGetQueryParams
}

type GetAvgListPriceListPriceGetResponse struct {
	BasicModelStatsResp *shared.BasicModelStatsResp
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
