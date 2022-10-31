package shared



type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsConnection struct {
    Database *string `json:"database,omitempty"`
    Host *string `json:"host,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Ssl *bool `json:"ssl,omitempty"`
    URI *string `json:"uri,omitempty"`
    User *string `json:"user,omitempty"`
    
}

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsPrivateConnection struct {
    Database *string `json:"database,omitempty"`
    Host *string `json:"host,omitempty"`
    Password *string `json:"password,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Ssl *bool `json:"ssl,omitempty"`
    URI *string `json:"uri,omitempty"`
    User *string `json:"user,omitempty"`
    
}

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems struct {
    Connection *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsConnection `json:"connection,omitempty"`
    Db string `json:"db"`
    Mode string `json:"mode"`
    Name string `json:"name"`
    PrivateConnection *Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsPrivateConnection `json:"private_connection,omitempty"`
    Size int32 `json:"size"`
    User string `json:"user"`
    
}

