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
	CompletedAt  *time.Time                                         `json:"completed_at"`
	ID           *int64                                             `json:"id"`
	Region       *ListAllActions200ApplicationJSONActionsRegion     `json:"region"`
	RegionSlug   map[string]interface{}                             `json:"region_slug"`
	ResourceID   *int64                                             `json:"resource_id"`
	ResourceType *string                                            `json:"resource_type"`
	StartedAt    *time.Time                                         `json:"started_at"`
	Status       *ListAllActions200ApplicationJSONActionsStatusEnum `json:"status"`
	Type         *string                                            `json:"type"`
}

type ListAllActions200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAllActions200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAllActions200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAllActions200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllActions200ApplicationJSON struct {
	Actions []ListAllActions200ApplicationJSONActions `json:"actions"`
	Links   *ListAllActions200ApplicationJSONLinks    `json:"links"`
	Meta    ListAllActions200ApplicationJSONMeta      `json:"meta"`
}

type ListAllActions401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllActionsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllActions200ApplicationJSONObject                    *ListAllActions200ApplicationJSON
	ListAllActions401ApplicationJSONObject                    *ListAllActions401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
