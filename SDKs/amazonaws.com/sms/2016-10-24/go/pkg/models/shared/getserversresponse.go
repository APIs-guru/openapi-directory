package shared

import (
	"time"
)

type GetServersResponse struct {
	LastModifiedOn      *time.Time               `json:"lastModifiedOn,omitempty"`
	NextToken           *string                  `json:"nextToken,omitempty"`
	ServerCatalogStatus *ServerCatalogStatusEnum `json:"serverCatalogStatus,omitempty"`
	ServerList          []Server                 `json:"serverList,omitempty"`
}
