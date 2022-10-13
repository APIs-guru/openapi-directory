package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetVehicleSeenVehicleSeenGetQueryParams struct {
	AfterDate time.Time `queryParam:"style=form,explode=true,name=afterDate"`
	Jwt       string    `queryParam:"style=form,explode=true,name=jwt"`
	Vin       string    `queryParam:"style=form,explode=true,name=vin"`
}

type GetVehicleSeenVehicleSeenGetRequest struct {
	QueryParams GetVehicleSeenVehicleSeenGetQueryParams
}

type GetVehicleSeenVehicleSeenGetResponse struct {
	BooleanResp         *shared.BooleanResp
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
