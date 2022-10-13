package operations

import (
	"openapi/pkg/models/shared"
)

type GetDealersGetDealersGetQueryParams struct {
	Jwt     string `queryParam:"style=form,explode=true,name=jwt"`
	ZipCode int64  `queryParam:"style=form,explode=true,name=zipCode"`
}

type GetDealersGetDealersGetRequest struct {
	QueryParams GetDealersGetDealersGetQueryParams
}

type GetDealersGetDealersGetResponse struct {
	ContentType         string
	DealershipDataResp  *shared.DealershipDataResp
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
