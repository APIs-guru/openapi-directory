package operations

import (
	"openapi/pkg/models/shared"
)

type PostVolumeActionByIDPathParams struct {
	VolumeID string `pathParam:"style=simple,explode=false,name=volume_id"`
}

type PostVolumeActionByIDQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type PostVolumeActionByIDRequestBody3TypeEnum string

const (
	PostVolumeActionByIDRequestBody3TypeEnumAttach PostVolumeActionByIDRequestBody3TypeEnum = "attach"
	PostVolumeActionByIDRequestBody3TypeEnumDetach PostVolumeActionByIDRequestBody3TypeEnum = "detach"
	PostVolumeActionByIDRequestBody3TypeEnumResize PostVolumeActionByIDRequestBody3TypeEnum = "resize"
)

type PostVolumeActionByIDRequestBody3 struct {
	Region        *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region,omitempty"`
	SizeGigabytes int64                                                                                                                                    `json:"size_gigabytes"`
	Type          PostVolumeActionByIDRequestBody3TypeEnum                                                                                                 `json:"type"`
}

type PostVolumeActionByIDRequest struct {
	PathParams  PostVolumeActionByIDPathParams
	QueryParams PostVolumeActionByIDQueryParams
	Request     interface{} `request:"mediaType=application/json"`
}

type PostVolumeActionByID401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PostVolumeActionByIDResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PostVolumeActionByID202ApplicationJSONAny                 *interface{}
	PostVolumeActionByID401ApplicationJSONObject              *PostVolumeActionByID401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
