package operations

import (
	"openapi/pkg/models/shared"
)

type PostChargeStationsRequest struct {
	Request shared.Schema1 `request:"mediaType=application/json"`
}

type PostChargeStations201ApplicationJSON struct {
	Chargestation map[string]interface{} `json:"chargestation,omitempty"`
	Message       *string                `json:"message,omitempty"`
	Ok            *bool                  `json:"ok,omitempty"`
}

type PostChargeStationsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PostChargeStations201ApplicationJSONObject *PostChargeStations201ApplicationJSON
}
