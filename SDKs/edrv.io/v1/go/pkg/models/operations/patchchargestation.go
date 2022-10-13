package operations

import (
	"openapi/pkg/models/shared"
)

type PatchChargeStationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchChargeStationRequest struct {
	PathParams PatchChargeStationPathParams
	Request    shared.Schema1 `request:"mediaType=application/json"`
}

type PatchChargeStation200ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type PatchChargeStationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PatchChargeStation200ApplicationJSONObject *PatchChargeStation200ApplicationJSON
}
