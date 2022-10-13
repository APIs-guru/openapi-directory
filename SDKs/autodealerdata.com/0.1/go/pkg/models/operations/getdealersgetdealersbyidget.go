package operations

import (
	"openapi/pkg/models/shared"
)

type GetDealersGetDealersByIDGetQueryParams struct {
	DealerID int64  `queryParam:"style=form,explode=true,name=dealerID"`
	Jwt      string `queryParam:"style=form,explode=true,name=jwt"`
}

type GetDealersGetDealersByIDGetRequest struct {
	QueryParams GetDealersGetDealersByIDGetQueryParams
}

type GetDealersGetDealersByIDGetResponse struct {
	ContentType         string
	DealershipDataResp  *shared.DealershipDataResp
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
