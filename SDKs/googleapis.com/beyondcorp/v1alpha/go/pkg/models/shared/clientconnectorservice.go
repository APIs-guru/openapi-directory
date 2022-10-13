package shared

type ClientConnectorServiceStateEnum string

const (
	ClientConnectorServiceStateEnumStateUnspecified ClientConnectorServiceStateEnum = "STATE_UNSPECIFIED"
	ClientConnectorServiceStateEnumCreating         ClientConnectorServiceStateEnum = "CREATING"
	ClientConnectorServiceStateEnumUpdating         ClientConnectorServiceStateEnum = "UPDATING"
	ClientConnectorServiceStateEnumDeleting         ClientConnectorServiceStateEnum = "DELETING"
	ClientConnectorServiceStateEnumRunning          ClientConnectorServiceStateEnum = "RUNNING"
	ClientConnectorServiceStateEnumDown             ClientConnectorServiceStateEnum = "DOWN"
	ClientConnectorServiceStateEnumError            ClientConnectorServiceStateEnum = "ERROR"
)

type ClientConnectorService struct {
	CreateTime  *string                          `json:"createTime"`
	DisplayName *string                          `json:"displayName"`
	Egress      *Egress                          `json:"egress"`
	Ingress     *Ingress                         `json:"ingress"`
	Name        *string                          `json:"name"`
	State       *ClientConnectorServiceStateEnum `json:"state"`
	UpdateTime  *string                          `json:"updateTime"`
}
