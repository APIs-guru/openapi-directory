package shared

type AppGatewayHostTypeEnum string

const (
	AppGatewayHostTypeEnumHostTypeUnspecified AppGatewayHostTypeEnum = "HOST_TYPE_UNSPECIFIED"
	AppGatewayHostTypeEnumGcpRegionalMig      AppGatewayHostTypeEnum = "GCP_REGIONAL_MIG"
)

type AppGatewayStateEnum string

const (
	AppGatewayStateEnumStateUnspecified AppGatewayStateEnum = "STATE_UNSPECIFIED"
	AppGatewayStateEnumCreating         AppGatewayStateEnum = "CREATING"
	AppGatewayStateEnumCreated          AppGatewayStateEnum = "CREATED"
	AppGatewayStateEnumUpdating         AppGatewayStateEnum = "UPDATING"
	AppGatewayStateEnumDeleting         AppGatewayStateEnum = "DELETING"
	AppGatewayStateEnumDown             AppGatewayStateEnum = "DOWN"
)

type AppGatewayTypeEnum string

const (
	AppGatewayTypeEnumTypeUnspecified AppGatewayTypeEnum = "TYPE_UNSPECIFIED"
	AppGatewayTypeEnumTCPProxy        AppGatewayTypeEnum = "TCP_PROXY"
)

type AppGateway struct {
	AllocatedConnections []AllocatedConnection   `json:"allocatedConnections"`
	CreateTime           *string                 `json:"createTime"`
	DisplayName          *string                 `json:"displayName"`
	HostType             *AppGatewayHostTypeEnum `json:"hostType"`
	Labels               map[string]string       `json:"labels"`
	Name                 *string                 `json:"name"`
	State                *AppGatewayStateEnum    `json:"state"`
	Type                 *AppGatewayTypeEnum     `json:"type"`
	UID                  *string                 `json:"uid"`
	UpdateTime           *string                 `json:"updateTime"`
	URI                  *string                 `json:"uri"`
}
