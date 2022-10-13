package operations

import (
	"openapi/pkg/models/shared"
)

type SearchPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type SearchRequest struct {
	PathParams SearchPathParams
}

type Search200ApplicationJSONResults struct {
	Description *string `json:"description"`
	Link        *string `json:"link"`
	Title       *string `json:"title"`
}

type Search200ApplicationJSON struct {
	Answer  *string                           `json:"answer"`
	Results []Search200ApplicationJSONResults `json:"results"`
	Total   *string                           `json:"total"`
}

type SearchResponse struct {
	ContentType                    string
	HTTPValidationError            *shared.HTTPValidationError
	Search200ApplicationJSONObject *Search200ApplicationJSON
	StatusCode                     int64
}
