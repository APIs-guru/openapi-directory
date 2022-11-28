package operations

import (
	"openapi/pkg/models/shared"
)

type SearchPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type Search200ApplicationJSONResults struct {
	Description *string `json:"description,omitempty"`
	Link        *string `json:"link,omitempty"`
	Title       *string `json:"title,omitempty"`
}

// Search200ApplicationJSON
// results
type Search200ApplicationJSON struct {
	Answer  *string                           `json:"answer,omitempty"`
	Results []Search200ApplicationJSONResults `json:"results,omitempty"`
	Total   *string                           `json:"total,omitempty"`
}

type SearchRequest struct {
	PathParams SearchPathParams
}

type SearchResponse struct {
	ContentType                    string
	HTTPValidationError            *shared.HTTPValidationError
	Search200ApplicationJSONObject *Search200ApplicationJSON
	StatusCode                     int64
}
