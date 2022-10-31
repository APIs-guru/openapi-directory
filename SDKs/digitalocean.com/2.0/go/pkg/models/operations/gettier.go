package operations

import (
	"openapi/pkg/models/shared"
)

type GetTierPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetTierRequest struct {
	PathParams GetTierPathParams
}

type GetTier200ApplicationJSON struct {
	Tier *shared.Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems `json:"tier,omitempty"`
}

type GetTier401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetTierResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetTier200ApplicationJSONObject                           *GetTier200ApplicationJSON
	GetTier401ApplicationJSONObject                           *GetTier401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
