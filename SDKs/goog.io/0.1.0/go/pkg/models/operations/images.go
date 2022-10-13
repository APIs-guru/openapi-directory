package operations

import (
	"openapi/pkg/models/shared"
)

type ImagesPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type ImagesRequest struct {
	PathParams ImagesPathParams
}

type Images200ApplicationJSONImageResultsImage struct {
	Alt *string `json:"alt"`
	Src *string `json:"src"`
}

type Images200ApplicationJSONImageResultsLink struct {
	Domain *string `json:"domain"`
	Href   *string `json:"href"`
	Title  *string `json:"title"`
}

type Images200ApplicationJSONImageResults struct {
	Image *Images200ApplicationJSONImageResultsImage `json:"image"`
	Link  *Images200ApplicationJSONImageResultsLink  `json:"link"`
}

type Images200ApplicationJSON struct {
	Answers      []string                               `json:"answers"`
	ImageResults []Images200ApplicationJSONImageResults `json:"image_results"`
	Results      []map[string]interface{}               `json:"results"`
	Total        *int64                                 `json:"total"`
}

type ImagesResponse struct {
	ContentType                    string
	HTTPValidationError            *shared.HTTPValidationError
	Images200ApplicationJSONObject *Images200ApplicationJSON
	StatusCode                     int64
}
