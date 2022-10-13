package shared

type ConnectionStateEnum string

const (
	ConnectionStateEnumStateUnspecified ConnectionStateEnum = "STATE_UNSPECIFIED"
	ConnectionStateEnumCreating         ConnectionStateEnum = "CREATING"
	ConnectionStateEnumCreated          ConnectionStateEnum = "CREATED"
	ConnectionStateEnumUpdating         ConnectionStateEnum = "UPDATING"
	ConnectionStateEnumDeleting         ConnectionStateEnum = "DELETING"
	ConnectionStateEnumDown             ConnectionStateEnum = "DOWN"
)

type ConnectionTypeEnum string

const (
	ConnectionTypeEnumTypeUnspecified ConnectionTypeEnum = "TYPE_UNSPECIFIED"
	ConnectionTypeEnumTCPProxy        ConnectionTypeEnum = "TCP_PROXY"
)

type Connection struct {
	ApplicationEndpoint *ApplicationEndpoint `json:"applicationEndpoint"`
	Connectors          []string             `json:"connectors"`
	CreateTime          *string              `json:"createTime"`
	DisplayName         *string              `json:"displayName"`
	Gateway             *Gateway             `json:"gateway"`
	Labels              map[string]string    `json:"labels"`
	Name                *string              `json:"name"`
	State               *ConnectionStateEnum `json:"state"`
	Type                *ConnectionTypeEnum  `json:"type"`
	UID                 *string              `json:"uid"`
	UpdateTime          *string              `json:"updateTime"`
}
