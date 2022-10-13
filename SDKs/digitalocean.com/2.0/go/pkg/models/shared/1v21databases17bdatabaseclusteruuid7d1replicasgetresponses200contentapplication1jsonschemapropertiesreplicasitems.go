package shared

import (
	"time"
)

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection struct {
	Database *string `json:"database"`
	Host     *string `json:"host"`
	Password *string `json:"password"`
	Port     *int64  `json:"port"`
	Ssl      *bool   `json:"ssl"`
	URI      *string `json:"uri"`
	User     *string `json:"user"`
}

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection struct {
	Database *string `json:"database"`
	Host     *string `json:"host"`
	Password *string `json:"password"`
	Port     *int64  `json:"port"`
	Ssl      *bool   `json:"ssl"`
	URI      *string `json:"uri"`
	User     *string `json:"user"`
}

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum string

const (
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnumCreating  Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum = "creating"
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnumOnline    Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum = "online"
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnumResizing  Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum = "resizing"
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnumMigrating Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum = "migrating"
	Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnumForking   Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum = "forking"
)

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItems struct {
	Connection         *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection        `json:"connection"`
	CreatedAt          *time.Time                                                                                                                                          `json:"created_at"`
	Name               string                                                                                                                                              `json:"name"`
	PrivateConnection  *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection `json:"private_connection"`
	PrivateNetworkUUID *string                                                                                                                                             `json:"private_network_uuid"`
	Region             *string                                                                                                                                             `json:"region"`
	Size               *string                                                                                                                                             `json:"size"`
	Status             *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum        `json:"status"`
	Tags               []string                                                                                                                                            `json:"tags"`
}
