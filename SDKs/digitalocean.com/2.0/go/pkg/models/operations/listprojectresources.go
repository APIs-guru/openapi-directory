package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListProjectResourcesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type ListProjectResourcesRequest struct {
	PathParams ListProjectResourcesPathParams
}

type ListProjectResources200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListProjectResources200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListProjectResources200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListProjectResources200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListProjectResources200ApplicationJSONResourcesLinks struct {
	Self *string `json:"self,omitempty"`
}

type ListProjectResources200ApplicationJSONResourcesStatusEnum string

const (
	ListProjectResources200ApplicationJSONResourcesStatusEnumOk              ListProjectResources200ApplicationJSONResourcesStatusEnum = "ok"
	ListProjectResources200ApplicationJSONResourcesStatusEnumNotFound        ListProjectResources200ApplicationJSONResourcesStatusEnum = "not_found"
	ListProjectResources200ApplicationJSONResourcesStatusEnumAssigned        ListProjectResources200ApplicationJSONResourcesStatusEnum = "assigned"
	ListProjectResources200ApplicationJSONResourcesStatusEnumAlreadyAssigned ListProjectResources200ApplicationJSONResourcesStatusEnum = "already_assigned"
	ListProjectResources200ApplicationJSONResourcesStatusEnumServiceDown     ListProjectResources200ApplicationJSONResourcesStatusEnum = "service_down"
)

type ListProjectResources200ApplicationJSONResources struct {
	AssignedAt *time.Time                                                 `json:"assigned_at,omitempty"`
	Links      *ListProjectResources200ApplicationJSONResourcesLinks      `json:"links,omitempty"`
	Status     *ListProjectResources200ApplicationJSONResourcesStatusEnum `json:"status,omitempty"`
	Urn        *string                                                    `json:"urn,omitempty"`
}

type ListProjectResources200ApplicationJSON struct {
	Links     *ListProjectResources200ApplicationJSONLinks      `json:"links,omitempty"`
	Meta      ListProjectResources200ApplicationJSONMeta        `json:"meta"`
	Resources []ListProjectResources200ApplicationJSONResources `json:"resources,omitempty"`
}

type ListProjectResources401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListProjectResourcesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListProjectResources200ApplicationJSONObject              *ListProjectResources200ApplicationJSON
	ListProjectResources401ApplicationJSONObject              *ListProjectResources401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
