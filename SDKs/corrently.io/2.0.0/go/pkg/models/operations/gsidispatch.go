package operations

import (
	"openapi/pkg/models/shared"
)

type GsiDispatchQueryParams struct {
	Key *string `queryParam:"style=form,explode=true,name=key"`
	Zip *string `queryParam:"style=form,explode=true,name=zip"`
}

type GsiDispatchRequest struct {
	QueryParams GsiDispatchQueryParams
}

type GsiDispatch200ApplicationJSONTimeframe struct {
	End   *int64 `json:"end,omitempty"`
	Start *int64 `json:"start,omitempty"`
}

type GsiDispatch200ApplicationJSON struct {
	AvgDistanceKm  *float64                                `json:"avg_distance_km,omitempty"`
	DispatchFrom   []shared.DispatchLocation               `json:"dispatch_from,omitempty"`
	DispatchTarget []shared.DispatchLocation               `json:"dispatch_target,omitempty"`
	Postmix        map[string]interface{}                  `json:"postmix,omitempty"`
	Premix         map[string]interface{}                  `json:"premix,omitempty"`
	Timeframe      *GsiDispatch200ApplicationJSONTimeframe `json:"timeframe,omitempty"`
}

type GsiDispatchResponse struct {
	ContentType                         string
	StatusCode                          int64
	GsiDispatch200ApplicationJSONObject *GsiDispatch200ApplicationJSON
}
