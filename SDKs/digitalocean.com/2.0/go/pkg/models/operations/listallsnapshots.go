package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAllSnapshotsResourceTypeEnum string

const (
	ListAllSnapshotsResourceTypeEnumDroplet ListAllSnapshotsResourceTypeEnum = "droplet"
	ListAllSnapshotsResourceTypeEnumVolume  ListAllSnapshotsResourceTypeEnum = "volume"
)

type ListAllSnapshotsQueryParams struct {
	Page         *int64                            `queryParam:"style=form,explode=true,name=page"`
	PerPage      *int64                            `queryParam:"style=form,explode=true,name=per_page"`
	ResourceType *ListAllSnapshotsResourceTypeEnum `queryParam:"style=form,explode=true,name=resource_type"`
}

type ListAllSnapshotsRequest struct {
	QueryParams ListAllSnapshotsQueryParams
}

type ListAllSnapshots200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListAllSnapshots200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListAllSnapshots200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllSnapshots200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum string

const (
	ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnumDroplet ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum = "droplet"
	ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnumVolume  ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum = "volume"
)

type ListAllSnapshots200ApplicationJSONSnapshots struct {
	CreatedAt     time.Time                                                   `json:"created_at"`
	ID            string                                                      `json:"id"`
	MinDiskSize   int64                                                       `json:"min_disk_size"`
	Name          string                                                      `json:"name"`
	Regions       []string                                                    `json:"regions"`
	ResourceID    string                                                      `json:"resource_id"`
	ResourceType  ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum `json:"resource_type"`
	SizeGigabytes float32                                                     `json:"size_gigabytes"`
	Tags          []string                                                    `json:"tags"`
}

type ListAllSnapshots200ApplicationJSON struct {
	Links     *ListAllSnapshots200ApplicationJSONLinks      `json:"links,omitempty"`
	Meta      ListAllSnapshots200ApplicationJSONMeta        `json:"meta"`
	Snapshots []ListAllSnapshots200ApplicationJSONSnapshots `json:"snapshots,omitempty"`
}

type ListAllSnapshots401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllSnapshotsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllSnapshots200ApplicationJSONObject                  *ListAllSnapshots200ApplicationJSON
	ListAllSnapshots401ApplicationJSONObject                  *ListAllSnapshots401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
