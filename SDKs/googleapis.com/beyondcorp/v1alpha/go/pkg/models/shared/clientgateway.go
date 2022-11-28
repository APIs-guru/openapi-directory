package shared

type ClientGatewayStateEnum string

const (
	ClientGatewayStateEnumStateUnspecified ClientGatewayStateEnum = "STATE_UNSPECIFIED"
	ClientGatewayStateEnumCreating         ClientGatewayStateEnum = "CREATING"
	ClientGatewayStateEnumUpdating         ClientGatewayStateEnum = "UPDATING"
	ClientGatewayStateEnumDeleting         ClientGatewayStateEnum = "DELETING"
	ClientGatewayStateEnumRunning          ClientGatewayStateEnum = "RUNNING"
	ClientGatewayStateEnumDown             ClientGatewayStateEnum = "DOWN"
	ClientGatewayStateEnumError            ClientGatewayStateEnum = "ERROR"
)

// ClientGateway
// Message describing ClientGateway object.
type ClientGateway struct {
	ClientConnectorService *string                 `json:"clientConnectorService,omitempty"`
	CreateTime             *string                 `json:"createTime,omitempty"`
	ID                     *string                 `json:"id,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	State                  *ClientGatewayStateEnum `json:"state,omitempty"`
	UpdateTime             *string                 `json:"updateTime,omitempty"`
}

// ClientGatewayInput
// Message describing ClientGateway object.
type ClientGatewayInput struct {
	Name *string `json:"name,omitempty"`
}
