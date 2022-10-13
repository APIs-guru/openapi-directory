package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateImagePathParams struct {
	ImageID int64 `pathParam:"style=simple,explode=false,name=image_id"`
}

type UpdateImageRequest struct {
	PathParams UpdateImagePathParams
	Request    shared.Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0 `request:"mediaType=application/json"`
}

type UpdateImage200ApplicationJSON struct {
	Image shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage `json:"image"`
}

type UpdateImage401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateImageResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateImage200ApplicationJSONObject                       *UpdateImage200ApplicationJSON
	UpdateImage401ApplicationJSONObject                       *UpdateImage401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
