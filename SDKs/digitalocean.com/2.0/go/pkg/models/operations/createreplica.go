package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateReplicaPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type CreateReplicaRequestBodyConnection struct {
	Database *string `json:"database"`
	Host     *string `json:"host"`
	Password *string `json:"password"`
	Port     *int64  `json:"port"`
	Ssl      *bool   `json:"ssl"`
	URI      *string `json:"uri"`
	User     *string `json:"user"`
}

type CreateReplicaRequestBodyPrivateConnection struct {
	Database *string `json:"database"`
	Host     *string `json:"host"`
	Password *string `json:"password"`
	Port     *int64  `json:"port"`
	Ssl      *bool   `json:"ssl"`
	URI      *string `json:"uri"`
	User     *string `json:"user"`
}

type CreateReplicaRequestBodyStatusEnum string

const (
	CreateReplicaRequestBodyStatusEnumCreating  CreateReplicaRequestBodyStatusEnum = "creating"
	CreateReplicaRequestBodyStatusEnumOnline    CreateReplicaRequestBodyStatusEnum = "online"
	CreateReplicaRequestBodyStatusEnumResizing  CreateReplicaRequestBodyStatusEnum = "resizing"
	CreateReplicaRequestBodyStatusEnumMigrating CreateReplicaRequestBodyStatusEnum = "migrating"
	CreateReplicaRequestBodyStatusEnumForking   CreateReplicaRequestBodyStatusEnum = "forking"
)

type CreateReplicaRequestBody struct {
	Connection         *CreateReplicaRequestBodyConnection        `json:"connection"`
	CreatedAt          *time.Time                                 `json:"created_at"`
	Name               string                                     `json:"name"`
	PrivateConnection  *CreateReplicaRequestBodyPrivateConnection `json:"private_connection"`
	PrivateNetworkUUID *string                                    `json:"private_network_uuid"`
	Region             *string                                    `json:"region"`
	Size               string                                     `json:"size"`
	Status             *CreateReplicaRequestBodyStatusEnum        `json:"status"`
	Tags               []string                                   `json:"tags"`
}

type CreateReplicaRequest struct {
	PathParams CreateReplicaPathParams
	Request    *CreateReplicaRequestBody `request:"mediaType=application/json"`
}

type CreateReplica201ApplicationJSON struct {
	Replica *shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItems `json:"replica"`
}

type CreateReplica401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateReplicaResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateReplica201ApplicationJSONObject                     *CreateReplica201ApplicationJSON
	CreateReplica401ApplicationJSONObject                     *CreateReplica401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
