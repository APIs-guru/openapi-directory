package shared




type ClientConnectorServiceStateEnum string

const (
    ClientConnectorServiceStateEnumStateUnspecified ClientConnectorServiceStateEnum = "STATE_UNSPECIFIED"
ClientConnectorServiceStateEnumCreating ClientConnectorServiceStateEnum = "CREATING"
ClientConnectorServiceStateEnumUpdating ClientConnectorServiceStateEnum = "UPDATING"
ClientConnectorServiceStateEnumDeleting ClientConnectorServiceStateEnum = "DELETING"
ClientConnectorServiceStateEnumRunning ClientConnectorServiceStateEnum = "RUNNING"
ClientConnectorServiceStateEnumDown ClientConnectorServiceStateEnum = "DOWN"
ClientConnectorServiceStateEnumError ClientConnectorServiceStateEnum = "ERROR"
)


type ClientConnectorService struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Egress *Egress `json:"egress,omitempty"`
    Ingress *Ingress `json:"ingress,omitempty"`
    Name *string `json:"name,omitempty"`
    State *ClientConnectorServiceStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

