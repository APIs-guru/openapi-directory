package operations

import (
	"openapi/pkg/models/shared"
)

type PostChargeStationsRequest struct {
	Request shared.Schema1 `request:"mediaType=application/json"`
}

type PostChargeStations201ApplicationJSON struct {
	Chargestation map[string]interface{} `json:"chargestation"`
	Message       *string                `json:"message"`
	Ok            *bool                  `json:"ok"`
}

type PostChargeStationsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PostChargeStations201ApplicationJSONObject *PostChargeStations201ApplicationJSON
}
