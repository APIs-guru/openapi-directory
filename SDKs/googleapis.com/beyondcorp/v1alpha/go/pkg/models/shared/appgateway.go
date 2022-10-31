package shared




type AppGatewayHostTypeEnum string

const (
    AppGatewayHostTypeEnumHostTypeUnspecified AppGatewayHostTypeEnum = "HOST_TYPE_UNSPECIFIED"
AppGatewayHostTypeEnumGcpRegionalMig AppGatewayHostTypeEnum = "GCP_REGIONAL_MIG"
)



type AppGatewayStateEnum string

const (
    AppGatewayStateEnumStateUnspecified AppGatewayStateEnum = "STATE_UNSPECIFIED"
AppGatewayStateEnumCreating AppGatewayStateEnum = "CREATING"
AppGatewayStateEnumCreated AppGatewayStateEnum = "CREATED"
AppGatewayStateEnumUpdating AppGatewayStateEnum = "UPDATING"
AppGatewayStateEnumDeleting AppGatewayStateEnum = "DELETING"
AppGatewayStateEnumDown AppGatewayStateEnum = "DOWN"
)



type AppGatewayTypeEnum string

const (
    AppGatewayTypeEnumTypeUnspecified AppGatewayTypeEnum = "TYPE_UNSPECIFIED"
AppGatewayTypeEnumTCPProxy AppGatewayTypeEnum = "TCP_PROXY"
)


type AppGateway struct {
    AllocatedConnections []AllocatedConnection `json:"allocatedConnections,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    HostType *AppGatewayHostTypeEnum `json:"hostType,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    State *AppGatewayStateEnum `json:"state,omitempty"`
    Type *AppGatewayTypeEnum `json:"type,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

