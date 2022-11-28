package operations

import (
	"openapi/pkg/models/shared"
)

type Serp200ApplicationJSON struct {
	Position        *int64  `json:"position,omitempty"`
	Query           *string `json:"query,omitempty"`
	SearchedResults *int64  `json:"searched_results,omitempty"`
	Website         *string `json:"website,omitempty"`
}

type SerpRequest struct {
	Request shared.SerpData `request:"mediaType=application/json"`
}

type SerpResponse struct {
	ContentType                  string
	HTTPValidationError          *shared.HTTPValidationError
	StatusCode                   int64
	Serp200ApplicationJSONObject *Serp200ApplicationJSON
}
