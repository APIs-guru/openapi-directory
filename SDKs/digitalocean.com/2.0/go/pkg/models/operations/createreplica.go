package operations

import (
"time"
"openapi/pkg/models/shared")

type CreateReplicaPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    
}

type CreateReplicaRequestBodyConnection struct {
    Database *string `json:"database,omitempty"`
    Host *string `json:"host,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Ssl *bool `json:"ssl,omitempty"`
    URI *string `json:"uri,omitempty"`
    User *string `json:"user,omitempty"`
    
}

type CreateReplicaRequestBodyPrivateConnection struct {
    Database *string `json:"database,omitempty"`
    Host *string `json:"host,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Ssl *bool `json:"ssl,omitempty"`
    URI *string `json:"uri,omitempty"`
    User *string `json:"user,omitempty"`
    
}


type CreateReplicaRequestBodyStatusEnum string

const (
    CreateReplicaRequestBodyStatusEnumCreating CreateReplicaRequestBodyStatusEnum = "creating"
CreateReplicaRequestBodyStatusEnumOnline CreateReplicaRequestBodyStatusEnum = "online"
CreateReplicaRequestBodyStatusEnumResizing CreateReplicaRequestBodyStatusEnum = "resizing"
CreateReplicaRequestBodyStatusEnumMigrating CreateReplicaRequestBodyStatusEnum = "migrating"
CreateReplicaRequestBodyStatusEnumForking CreateReplicaRequestBodyStatusEnum = "forking"
)


type CreateReplicaRequestBody struct {
    Connection *CreateReplicaRequestBodyConnection `json:"connection,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Name string `json:"name"`
    PrivateConnection *CreateReplicaRequestBodyPrivateConnection `json:"private_connection,omitempty"`
    PrivateNetworkUUID *string `json:"private_network_uuid,omitempty"`
    Region *string `json:"region,omitempty"`
    Size string `json:"size"`
    Status *CreateReplicaRequestBodyStatusEnum `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type CreateReplicaRequest struct {
    PathParams CreateReplicaPathParams 
    Request *CreateReplicaRequestBody `request:"mediaType=application/json"`
    
}

type CreateReplica201ApplicationJSON struct {
    Replica *shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItems `json:"replica,omitempty"`
    
}

type CreateReplica401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateReplicaResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateReplica201ApplicationJSONObject *CreateReplica201ApplicationJSON 
    CreateReplica401ApplicationJSONObject *CreateReplica401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

