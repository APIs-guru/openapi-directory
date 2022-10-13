package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListDefaultProjectResources200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListDefaultProjectResources200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListDefaultProjectResources200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListDefaultProjectResources200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListDefaultProjectResources200ApplicationJSONResourcesLinks struct {
	Self *string `json:"self"`
}

type ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum string

const (
	ListDefaultProjectResources200ApplicationJSONResourcesStatusEnumOk              ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum = "ok"
	ListDefaultProjectResources200ApplicationJSONResourcesStatusEnumNotFound        ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum = "not_found"
	ListDefaultProjectResources200ApplicationJSONResourcesStatusEnumAssigned        ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum = "assigned"
	ListDefaultProjectResources200ApplicationJSONResourcesStatusEnumAlreadyAssigned ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum = "already_assigned"
	ListDefaultProjectResources200ApplicationJSONResourcesStatusEnumServiceDown     ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum = "service_down"
)

type ListDefaultProjectResources200ApplicationJSONResources struct {
	AssignedAt *time.Time                                                        `json:"assigned_at"`
	Links      *ListDefaultProjectResources200ApplicationJSONResourcesLinks      `json:"links"`
	Status     *ListDefaultProjectResources200ApplicationJSONResourcesStatusEnum `json:"status"`
	Urn        *string                                                           `json:"urn"`
}

type ListDefaultProjectResources200ApplicationJSON struct {
	Links     *ListDefaultProjectResources200ApplicationJSONLinks      `json:"links"`
	Meta      ListDefaultProjectResources200ApplicationJSONMeta        `json:"meta"`
	Resources []ListDefaultProjectResources200ApplicationJSONResources `json:"resources"`
}

type ListDefaultProjectResources401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListDefaultProjectResourcesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDefaultProjectResources200ApplicationJSONObject       *ListDefaultProjectResources200ApplicationJSON
	ListDefaultProjectResources401ApplicationJSONObject       *ListDefaultProjectResources401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
