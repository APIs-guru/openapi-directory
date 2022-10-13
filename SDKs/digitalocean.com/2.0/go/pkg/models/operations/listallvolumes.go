package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllVolumesQueryParams struct {
	Name    *string                                                                                                                                  `queryParam:"style=form,explode=true,name=name"`
	Page    *int64                                                                                                                                   `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                                                                                                                   `queryParam:"style=form,explode=true,name=per_page"`
	Region  *shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `queryParam:"style=form,explode=true,name=region"`
}

type ListAllVolumesRequest struct {
	QueryParams ListAllVolumesQueryParams
}

type ListAllVolumes200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAllVolumes200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAllVolumes200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAllVolumes200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllVolumes200ApplicationJSONVolumesRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type ListAllVolumes200ApplicationJSONVolumes struct {
	CreatedAt       *string                                        `json:"created_at"`
	Description     *string                                        `json:"description"`
	DropletIds      []int64                                        `json:"droplet_ids"`
	FilesystemLabel *string                                        `json:"filesystem_label"`
	FilesystemType  *string                                        `json:"filesystem_type"`
	ID              *string                                        `json:"id"`
	Name            *string                                        `json:"name"`
	Region          *ListAllVolumes200ApplicationJSONVolumesRegion `json:"region"`
	SizeGigabytes   *int64                                         `json:"size_gigabytes"`
	Tags            []string                                       `json:"tags"`
}

type ListAllVolumes200ApplicationJSON struct {
	Links   *ListAllVolumes200ApplicationJSONLinks    `json:"links"`
	Meta    ListAllVolumes200ApplicationJSONMeta      `json:"meta"`
	Volumes []ListAllVolumes200ApplicationJSONVolumes `json:"volumes"`
}

type ListAllVolumes401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllVolumesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllVolumes200ApplicationJSONObject                    *ListAllVolumes200ApplicationJSON
	ListAllVolumes401ApplicationJSONObject                    *ListAllVolumes401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
