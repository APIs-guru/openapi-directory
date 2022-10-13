package operations

import (
	"openapi/pkg/models/shared"
)

type SerpRequest struct {
	Request shared.SerpData `request:"mediaType=application/json"`
}

type Serp200ApplicationJSON struct {
	Position        *int64  `json:"position"`
	Query           *string `json:"query"`
	SearchedResults *int64  `json:"searched_results"`
	Website         *string `json:"website"`
}

type SerpResponse struct {
	ContentType                  string
	HTTPValidationError          *shared.HTTPValidationError
	StatusCode                   int64
	Serp200ApplicationJSONObject *Serp200ApplicationJSON
}
