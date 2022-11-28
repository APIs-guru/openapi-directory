package operations

import (
	"openapi/pkg/models/shared"
)

type ImagesPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type Images200ApplicationJSONImageResultsImage struct {
	Alt *string `json:"alt,omitempty"`
	Src *string `json:"src,omitempty"`
}

type Images200ApplicationJSONImageResultsLink struct {
	Domain *string `json:"domain,omitempty"`
	Href   *string `json:"href,omitempty"`
	Title  *string `json:"title,omitempty"`
}

type Images200ApplicationJSONImageResults struct {
	Image *Images200ApplicationJSONImageResultsImage `json:"image,omitempty"`
	Link  *Images200ApplicationJSONImageResultsLink  `json:"link,omitempty"`
}

type Images200ApplicationJSON struct {
	Answers      []string                               `json:"answers,omitempty"`
	ImageResults []Images200ApplicationJSONImageResults `json:"image_results,omitempty"`
	Results      []map[string]interface{}               `json:"results,omitempty"`
	Total        *int64                                 `json:"total,omitempty"`
}

type ImagesRequest struct {
	PathParams ImagesPathParams
}

type ImagesResponse struct {
	ContentType                    string
	HTTPValidationError            *shared.HTTPValidationError
	Images200ApplicationJSONObject *Images200ApplicationJSON
	StatusCode                     int64
}
