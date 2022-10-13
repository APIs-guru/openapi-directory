package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllRegionsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllRegionsRequest struct {
	QueryParams ListAllRegionsQueryParams
}

type ListAllRegions200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAllRegions200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAllRegions200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAllRegions200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllRegions200ApplicationJSON struct {
	Links   *ListAllRegions200ApplicationJSONLinks                                                                         `json:"links"`
	Meta    ListAllRegions200ApplicationJSONMeta                                                                           `json:"meta"`
	Regions []shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion `json:"regions"`
}

type ListAllRegions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllRegionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllRegions200ApplicationJSONObject                    *ListAllRegions200ApplicationJSON
	ListAllRegions401ApplicationJSONObject                    *ListAllRegions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
