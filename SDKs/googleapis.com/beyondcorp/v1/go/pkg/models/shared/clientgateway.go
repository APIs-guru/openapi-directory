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

type ClientGateway struct {
	ClientConnectorService *string                 `json:"clientConnectorService"`
	CreateTime             *string                 `json:"createTime"`
	ID                     *string                 `json:"id"`
	Name                   *string                 `json:"name"`
	State                  *ClientGatewayStateEnum `json:"state"`
	UpdateTime             *string                 `json:"updateTime"`
}
