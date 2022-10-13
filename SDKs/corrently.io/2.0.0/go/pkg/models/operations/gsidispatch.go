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
	End   *int64 `json:"end"`
	Start *int64 `json:"start"`
}

type GsiDispatch200ApplicationJSON struct {
	AvgDistanceKm  *float64                                `json:"avg_distance_km"`
	DispatchFrom   []shared.DispatchLocation               `json:"dispatch_from"`
	DispatchTarget []shared.DispatchLocation               `json:"dispatch_target"`
	Postmix        map[string]interface{}                  `json:"postmix"`
	Premix         map[string]interface{}                  `json:"premix"`
	Timeframe      *GsiDispatch200ApplicationJSONTimeframe `json:"timeframe"`
}

type GsiDispatchResponse struct {
	ContentType                         string
	StatusCode                          int64
	GsiDispatch200ApplicationJSONObject *GsiDispatch200ApplicationJSON
}
