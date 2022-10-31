package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAllActionsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllActionsRequest struct {
	QueryParams ListAllActionsQueryParams
}

type ListAllActions200ApplicationJSONActionsRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type ListAllActions200ApplicationJSONActionsStatusEnum string

const (
	ListAllActions200ApplicationJSONActionsStatusEnumInProgress ListAllActions200ApplicationJSONActionsStatusEnum = "in-progress"
	ListAllActions200ApplicationJSONActionsStatusEnumCompleted  ListAllActions200ApplicationJSONActionsStatusEnum = "completed"
	ListAllActions200ApplicationJSONActionsStatusEnumErrored    ListAllActions200ApplicationJSONActionsStatusEnum = "errored"
)

type ListAllActions200ApplicationJSONActions struct {
	CompletedAt  *time.Time                                         `json:"completed_at,omitempty"`
	ID           *int64                                             `json:"id,omitempty"`
	Region       *ListAllActions200ApplicationJSONActionsRegion     `json:"region,omitempty"`
	RegionSlug   map[string]interface{}                             `json:"region_slug,omitempty"`
	ResourceID   *int64                                             `json:"resource_id,omitempty"`
	ResourceType *string                                            `json:"resource_type,omitempty"`
	StartedAt    *time.Time                                         `json:"started_at,omitempty"`
	Status       *ListAllActions200ApplicationJSONActionsStatusEnum `json:"status,omitempty"`
	Type         *string                                            `json:"type,omitempty"`
}

type ListAllActions200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListAllActions200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListAllActions200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllActions200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllActions200ApplicationJSON struct {
	Actions []ListAllActions200ApplicationJSONActions `json:"actions,omitempty"`
	Links   *ListAllActions200ApplicationJSONLinks    `json:"links,omitempty"`
	Meta    ListAllActions200ApplicationJSONMeta      `json:"meta"`
}

type ListAllActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllActions200ApplicationJSONObject                    *ListAllActions200ApplicationJSON
	ListAllActions401ApplicationJSONObject                    *ListAllActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
