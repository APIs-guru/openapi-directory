package shared

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsConnection struct {
	Database *string `json:"database"`
	Host     *string `json:"host"`
	Password *string `json:"password"`
	Port     *int64  `json:"port"`
	Ssl      *bool   `json:"ssl"`
	URI      *string `json:"uri"`
	User     *string `json:"user"`
}

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsPrivateConnection struct {
	Database *string `json:"database"`
	Host     *string `json:"host"`
	Password *string `json:"password"`
	Port     *int64  `json:"port"`
	Ssl      *bool   `json:"ssl"`
	URI      *string `json:"uri"`
	User     *string `json:"user"`
}

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems struct {
	Connection        *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsConnection        `json:"connection"`
	Db                string                                                                                                                                        `json:"db"`
	Mode              string                                                                                                                                        `json:"mode"`
	Name              string                                                                                                                                        `json:"name"`
	PrivateConnection *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsPrivateConnection `json:"private_connection"`
	Size              int32                                                                                                                                         `json:"size"`
	User              string                                                                                                                                        `json:"user"`
}
