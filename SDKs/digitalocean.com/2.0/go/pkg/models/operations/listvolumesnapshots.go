package operations

import (
	"openapi/pkg/models/shared"
)

type ListVolumeSnapshotsPathParams struct {
	VolumeID string `pathParam:"style=simple,explode=false,name=volume_id"`
}

type ListVolumeSnapshotsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListVolumeSnapshotsRequest struct {
	PathParams  ListVolumeSnapshotsPathParams
	QueryParams ListVolumeSnapshotsQueryParams
}

type ListVolumeSnapshots200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListVolumeSnapshots200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListVolumeSnapshots200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListVolumeSnapshots200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListVolumeSnapshots200ApplicationJSON struct {
	Links     *ListVolumeSnapshots200ApplicationJSONLinks                                                        `json:"links"`
	Meta      ListVolumeSnapshots200ApplicationJSONMeta                                                          `json:"meta"`
	Snapshots []shared.Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems `json:"snapshots"`
}

type ListVolumeSnapshots401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListVolumeSnapshotsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListVolumeSnapshots200ApplicationJSONObject               *ListVolumeSnapshots200ApplicationJSON
	ListVolumeSnapshots401ApplicationJSONObject               *ListVolumeSnapshots401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
