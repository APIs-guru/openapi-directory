package operations

import (
	"openapi/pkg/models/shared"
)

type ListFloatingIPActionsPathParams struct {
	FloatingIP string `pathParam:"style=simple,explode=false,name=floating_ip"`
}

type ListFloatingIPActionsRequest struct {
	PathParams ListFloatingIPActionsPathParams
}

type ListFloatingIPActions200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListFloatingIPActions200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListFloatingIPActions200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListFloatingIPActions200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListFloatingIPActions200ApplicationJSON struct {
	Actions []shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems `json:"actions"`
	Links   *ListFloatingIPActions200ApplicationJSONLinks                                                  `json:"links"`
	Meta    ListFloatingIPActions200ApplicationJSONMeta                                                    `json:"meta"`
}

type ListFloatingIPActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListFloatingIPActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListFloatingIPActions200ApplicationJSONObject             *ListFloatingIPActions200ApplicationJSON
	ListFloatingIPActions401ApplicationJSONObject             *ListFloatingIPActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
