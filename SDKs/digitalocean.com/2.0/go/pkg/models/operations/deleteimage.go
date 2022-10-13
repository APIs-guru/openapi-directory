package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImagePathParams struct {
	ImageID int64 `pathParam:"style=simple,explode=false,name=image_id"`
}

type DeleteImageRequest struct {
	PathParams DeleteImagePathParams
}

type DeleteImage401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteImageResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteImage401ApplicationJSONObject                       *DeleteImage401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
