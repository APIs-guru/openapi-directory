package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListDropletBackupsPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletBackupsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDropletBackupsRequest struct {
	PathParams  ListDropletBackupsPathParams
	QueryParams ListDropletBackupsQueryParams
}

type ListDropletBackups200ApplicationJSONBackupsTypeEnum string

const (
	ListDropletBackups200ApplicationJSONBackupsTypeEnumSnapshot ListDropletBackups200ApplicationJSONBackupsTypeEnum = "snapshot"
	ListDropletBackups200ApplicationJSONBackupsTypeEnumBackup   ListDropletBackups200ApplicationJSONBackupsTypeEnum = "backup"
)

type ListDropletBackups200ApplicationJSONBackups struct {
	CreatedAt     time.Time                                           `json:"created_at"`
	ID            int64                                               `json:"id"`
	MinDiskSize   int64                                               `json:"min_disk_size"`
	Name          string                                              `json:"name"`
	Regions       []string                                            `json:"regions"`
	SizeGigabytes float32                                             `json:"size_gigabytes"`
	Type          ListDropletBackups200ApplicationJSONBackupsTypeEnum `json:"type"`
}

type ListDropletBackups200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListDropletBackups200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListDropletBackups200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListDropletBackups200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListDropletBackups200ApplicationJSON struct {
	Backups []ListDropletBackups200ApplicationJSONBackups `json:"backups"`
	Links   *ListDropletBackups200ApplicationJSONLinks    `json:"links"`
	Meta    ListDropletBackups200ApplicationJSONMeta      `json:"meta"`
}

type ListDropletBackups401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListDropletBackupsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletBackups200ApplicationJSONObject                *ListDropletBackups200ApplicationJSON
	ListDropletBackups401ApplicationJSONObject                *ListDropletBackups401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
