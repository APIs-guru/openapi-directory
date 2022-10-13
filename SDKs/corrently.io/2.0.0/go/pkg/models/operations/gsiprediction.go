package operations

import (
	"openapi/pkg/models/shared"
)

type GsiPredictionQueryParams struct {
	Key *string `queryParam:"style=form,explode=true,name=key"`
	Zip *string `queryParam:"style=form,explode=true,name=zip"`
}

type GsiPredictionRequest struct {
	QueryParams GsiPredictionQueryParams
}

type GsiPrediction200ApplicationJSONLocation struct {
	City *string `json:"city"`
	Zip  *string `json:"zip"`
}

type GsiPrediction200ApplicationJSONMatrixH0 struct {
	Avg1 *string `json:"avg_1"`
	Avg2 *string `json:"avg_2"`
	Avg3 *string `json:"avg_3"`
}

type GsiPrediction200ApplicationJSONMatrix struct {
	H0 *GsiPrediction200ApplicationJSONMatrixH0 `json:"h0"`
}

type GsiPrediction200ApplicationJSON struct {
	Forecast []shared.ForecastItem                    `json:"forecast"`
	Location *GsiPrediction200ApplicationJSONLocation `json:"location"`
	Matrix   *GsiPrediction200ApplicationJSONMatrix   `json:"matrix"`
}

type GsiPredictionResponse struct {
	ContentType                           string
	StatusCode                            int64
	GsiPrediction200ApplicationJSONObject *GsiPrediction200ApplicationJSON
}
