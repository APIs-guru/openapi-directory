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
	ApplicationEndpoint *ApplicationEndpoint `json:"applicationEndpoint,omitempty"`
	Connectors          []string             `json:"connectors,omitempty"`
	CreateTime          *string              `json:"createTime,omitempty"`
	DisplayName         *string              `json:"displayName,omitempty"`
	Gateway             *Gateway             `json:"gateway,omitempty"`
	Labels              map[string]string    `json:"labels,omitempty"`
	Name                *string              `json:"name,omitempty"`
	State               *ConnectionStateEnum `json:"state,omitempty"`
	Type                *ConnectionTypeEnum  `json:"type,omitempty"`
	UID                 *string              `json:"uid,omitempty"`
	UpdateTime          *string              `json:"updateTime,omitempty"`
}
