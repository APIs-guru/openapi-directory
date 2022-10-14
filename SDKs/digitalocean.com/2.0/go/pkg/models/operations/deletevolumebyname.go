package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVolumeByNameQueryParams struct {
	Name   *string                                                                                                                                  `queryParam:"style=form,explode=true,name=name"`
	Region *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `queryParam:"style=form,explode=true,name=region"`
}

type DeleteVolumeByNameRequest struct {
	QueryParams DeleteVolumeByNameQueryParams
}

type DeleteVolumeByName401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteVolumeByNameResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteVolumeByName401ApplicationJSONObject                *DeleteVolumeByName401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
