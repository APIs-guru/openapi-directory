package operations

import (
	"openapi/pkg/models/shared"
)

type ListImageActionsPathParams struct {
	ImageID int64 `pathParam:"style=simple,explode=false,name=image_id"`
}

type ListImageActionsRequest struct {
	PathParams ListImageActionsPathParams
}

type ListImageActions200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListImageActions200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListImageActions200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListImageActions200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListImageActions200ApplicationJSON struct {
	Actions []shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems `json:"actions"`
	Links   *ListImageActions200ApplicationJSONLinks                                                       `json:"links"`
	Meta    ListImageActions200ApplicationJSONMeta                                                         `json:"meta"`
}

type ListImageActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListImageActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListImageActions200ApplicationJSONObject                  *ListImageActions200ApplicationJSON
	ListImageActions401ApplicationJSONObject                  *ListImageActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
