package shared

import (
	"time"
)

type GetServersResponse struct {
	LastModifiedOn      *time.Time               `json:"lastModifiedOn"`
	NextToken           *string                  `json:"nextToken"`
	ServerCatalogStatus *ServerCatalogStatusEnum `json:"serverCatalogStatus"`
	ServerList          []Server                 `json:"serverList"`
}
