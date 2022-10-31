package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceSizePathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetInstanceSizeRequest struct {
	PathParams GetInstanceSizePathParams
}

type GetInstanceSize200ApplicationJSON struct {
	InstanceSize *shared.Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems `json:"instance_size,omitempty"`
}

type GetInstanceSize401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetInstanceSizeResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetInstanceSize200ApplicationJSONObject                   *GetInstanceSize200ApplicationJSON
	GetInstanceSize401ApplicationJSONObject                   *GetInstanceSize401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
