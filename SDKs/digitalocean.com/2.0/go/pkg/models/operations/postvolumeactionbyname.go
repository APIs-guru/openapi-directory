package operations

import (
	"openapi/pkg/models/shared"
)

type PostVolumeActionByNameQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type PostVolumeActionByNameRequestBody1TypeEnum string

const (
	PostVolumeActionByNameRequestBody1TypeEnumAttach PostVolumeActionByNameRequestBody1TypeEnum = "attach"
	PostVolumeActionByNameRequestBody1TypeEnumDetach PostVolumeActionByNameRequestBody1TypeEnum = "detach"
	PostVolumeActionByNameRequestBody1TypeEnumResize PostVolumeActionByNameRequestBody1TypeEnum = "resize"
)

type PostVolumeActionByNameRequestBody1 struct {
	DropletID int64                                                                                                                                    `json:"droplet_id"`
	Region    *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Tags      []string                                                                                                                                 `json:"tags"`
	Type      PostVolumeActionByNameRequestBody1TypeEnum                                                                                               `json:"type"`
}

type PostVolumeActionByNameRequestBody2TypeEnum string

const (
	PostVolumeActionByNameRequestBody2TypeEnumAttach PostVolumeActionByNameRequestBody2TypeEnum = "attach"
	PostVolumeActionByNameRequestBody2TypeEnumDetach PostVolumeActionByNameRequestBody2TypeEnum = "detach"
	PostVolumeActionByNameRequestBody2TypeEnumResize PostVolumeActionByNameRequestBody2TypeEnum = "resize"
)

type PostVolumeActionByNameRequestBody2 struct {
	DropletID int64                                                                                                                                    `json:"droplet_id"`
	Region    *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Type      PostVolumeActionByNameRequestBody2TypeEnum                                                                                               `json:"type"`
}

type PostVolumeActionByNameRequest struct {
	QueryParams PostVolumeActionByNameQueryParams
	Request     interface{} `request:"mediaType=application/json"`
}

type PostVolumeActionByName401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type PostVolumeActionByNameResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PostVolumeActionByName202ApplicationJSONAny               *interface{}
	PostVolumeActionByName401ApplicationJSONObject            *PostVolumeActionByName401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
