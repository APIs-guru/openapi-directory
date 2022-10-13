package operations

import (
	"openapi/pkg/models/shared"
)

type GetHistory2VehicleHistoryGetQueryParams struct {
	Jwt string `queryParam:"style=form,explode=true,name=jwt"`
	Vin string `queryParam:"style=form,explode=true,name=vin"`
}

type GetHistory2VehicleHistoryGetRequest struct {
	QueryParams GetHistory2VehicleHistoryGetQueryParams
}

type GetHistory2VehicleHistoryGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	HistoryResp         *shared.HistoryResp
	StatusCode          int64
}
