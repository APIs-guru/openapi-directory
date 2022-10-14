package operations

import (
	"openapi/pkg/models/shared"
)

type ListConnectionPoolsPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type ListConnectionPoolsRequest struct {
	PathParams ListConnectionPoolsPathParams
}

type ListConnectionPools200ApplicationJSONPoolsConnection struct {
	Database *string `json:"database,omitempty"`
	Host     *string `json:"host,omitempty"`
	Password *string `json:"password,omitempty"`
	Port     *int64  `json:"port,omitempty"`
	Ssl      *bool   `json:"ssl,omitempty"`
	URI      *string `json:"uri,omitempty"`
	User     *string `json:"user,omitempty"`
}

type ListConnectionPools200ApplicationJSONPoolsPrivateConnection struct {
	Database *string `json:"database,omitempty"`
	Host     *string `json:"host,omitempty"`
	Password *string `json:"password,omitempty"`
	Port     *int64  `json:"port,omitempty"`
	Ssl      *bool   `json:"ssl,omitempty"`
	URI      *string `json:"uri,omitempty"`
	User     *string `json:"user,omitempty"`
}

type ListConnectionPools200ApplicationJSONPools struct {
	Connection        *ListConnectionPools200ApplicationJSONPoolsConnection        `json:"connection,omitempty"`
	Db                string                                                       `json:"db"`
	Mode              string                                                       `json:"mode"`
	Name              string                                                       `json:"name"`
	PrivateConnection *ListConnectionPools200ApplicationJSONPoolsPrivateConnection `json:"private_connection,omitempty"`
	Size              int32                                                        `json:"size"`
	User              string                                                       `json:"user"`
}

type ListConnectionPools200ApplicationJSON struct {
	Pools []ListConnectionPools200ApplicationJSONPools `json:"pools,omitempty"`
}

type ListConnectionPools401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListConnectionPoolsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListConnectionPools200ApplicationJSONObject               *ListConnectionPools200ApplicationJSON
	ListConnectionPools401ApplicationJSONObject               *ListConnectionPools401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
