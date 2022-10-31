package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllSizesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllSizesRequest struct {
	QueryParams ListAllSizesQueryParams
}

type ListAllSizes200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListAllSizes200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListAllSizes200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllSizes200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllSizes200ApplicationJSON struct {
	Links *ListAllSizes200ApplicationJSONLinks                                                                           `json:"links,omitempty"`
	Meta  ListAllSizes200ApplicationJSONMeta                                                                             `json:"meta"`
	Sizes []shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize `json:"sizes"`
}

type ListAllSizes401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllSizesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllSizes200ApplicationJSONObject                      *ListAllSizes200ApplicationJSON
	ListAllSizes401ApplicationJSONObject                      *ListAllSizes401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
