package operations

import (
	"openapi/pkg/models/shared"
)

type ListDropletKernelsPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletKernelsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDropletKernelsRequest struct {
	PathParams  ListDropletKernelsPathParams
	QueryParams ListDropletKernelsQueryParams
}

type ListDropletKernels200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListDropletKernels200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListDropletKernels200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListDropletKernels200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListDropletKernels200ApplicationJSON struct {
	Kernels []shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel `json:"kernels,omitempty"`
	Links   *ListDropletKernels200ApplicationJSONLinks                                                                       `json:"links,omitempty"`
	Meta    ListDropletKernels200ApplicationJSONMeta                                                                         `json:"meta"`
}

type ListDropletKernels401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDropletKernelsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletKernels200ApplicationJSONObject                *ListDropletKernels200ApplicationJSON
	ListDropletKernels401ApplicationJSONObject                *ListDropletKernels401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
