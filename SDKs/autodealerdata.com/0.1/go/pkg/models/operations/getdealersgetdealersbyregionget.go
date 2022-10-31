package operations

import (
	"openapi/pkg/models/shared"
)

type GetDealersGetDealersByRegionGetQueryParams struct {
	Jwt        string  `queryParam:"style=form,explode=true,name=jwt"`
	Page       *int64  `queryParam:"style=form,explode=true,name=page"`
	RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
}

type GetDealersGetDealersByRegionGetRequest struct {
	QueryParams GetDealersGetDealersByRegionGetQueryParams
}

type GetDealersGetDealersByRegionGetResponse struct {
	ContentType                 string
	DealershipDataPaginatedResp *shared.DealershipDataPaginatedResp
	HTTPValidationError         *shared.HTTPValidationError
	StatusCode                  int64
}
