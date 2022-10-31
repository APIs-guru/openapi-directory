package shared




type ConnectorStateEnum string

const (
    ConnectorStateEnumStateUnspecified ConnectorStateEnum = "STATE_UNSPECIFIED"
ConnectorStateEnumCreating ConnectorStateEnum = "CREATING"
ConnectorStateEnumCreated ConnectorStateEnum = "CREATED"
ConnectorStateEnumUpdating ConnectorStateEnum = "UPDATING"
ConnectorStateEnumDeleting ConnectorStateEnum = "DELETING"
ConnectorStateEnumDown ConnectorStateEnum = "DOWN"
)


type Connector struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    PrincipalInfo *PrincipalInfo `json:"principalInfo,omitempty"`
    ResourceInfo *ResourceInfo `json:"resourceInfo,omitempty"`
    State *ConnectorStateEnum `json:"state,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

