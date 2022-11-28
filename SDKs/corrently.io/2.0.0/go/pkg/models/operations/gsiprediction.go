package operations

import (
	"openapi/pkg/models/shared"
)

type GsiPredictionQueryParams struct {
	Key *string `queryParam:"style=form,explode=true,name=key"`
	Zip *string `queryParam:"style=form,explode=true,name=zip"`
}

// GsiPrediction200ApplicationJSONLocation
// Standarized location info sourced for prediction
type GsiPrediction200ApplicationJSONLocation struct {
	City *string `json:"city,omitempty"`
	Zip  *string `json:"zip,omitempty"`
}

// GsiPrediction200ApplicationJSONMatrixH0
// Indicates number of hours a device should run
type GsiPrediction200ApplicationJSONMatrixH0 struct {
	Avg1 *string `json:"avg_1,omitempty"`
	Avg2 *string `json:"avg_2,omitempty"`
	Avg3 *string `json:"avg_3,omitempty"`
}

// GsiPrediction200ApplicationJSONMatrix
// Device switching recommendation.
type GsiPrediction200ApplicationJSONMatrix struct {
	H0 *GsiPrediction200ApplicationJSONMatrixH0 `json:"h0,omitempty"`
}

type GsiPrediction200ApplicationJSON struct {
	Forecast []shared.ForecastItem                    `json:"forecast,omitempty"`
	Location *GsiPrediction200ApplicationJSONLocation `json:"location,omitempty"`
	Matrix   *GsiPrediction200ApplicationJSONMatrix   `json:"matrix,omitempty"`
}

type GsiPredictionRequest struct {
	QueryParams GsiPredictionQueryParams
}

type GsiPredictionResponse struct {
	ContentType                           string
	StatusCode                            int64
	GsiPrediction200ApplicationJSONObject *GsiPrediction200ApplicationJSON
}
