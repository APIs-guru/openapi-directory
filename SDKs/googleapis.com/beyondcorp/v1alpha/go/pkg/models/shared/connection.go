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

// ConnectionInput
// A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
type ConnectionInput struct {
	ApplicationEndpoint *ApplicationEndpoint `json:"applicationEndpoint,omitempty"`
	Connectors          []string             `json:"connectors,omitempty"`
	DisplayName         *string              `json:"displayName,omitempty"`
	Gateway             *GatewayInput        `json:"gateway,omitempty"`
	Labels              map[string]string    `json:"labels,omitempty"`
	Name                *string              `json:"name,omitempty"`
	Type                *ConnectionTypeEnum  `json:"type,omitempty"`
}

// Connection
// A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
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
