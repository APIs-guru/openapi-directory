package shared

type ConnectorStateEnum string

const (
	ConnectorStateEnumStateUnspecified ConnectorStateEnum = "STATE_UNSPECIFIED"
	ConnectorStateEnumCreating         ConnectorStateEnum = "CREATING"
	ConnectorStateEnumCreated          ConnectorStateEnum = "CREATED"
	ConnectorStateEnumUpdating         ConnectorStateEnum = "UPDATING"
	ConnectorStateEnumDeleting         ConnectorStateEnum = "DELETING"
	ConnectorStateEnumDown             ConnectorStateEnum = "DOWN"
)

type Connector struct {
	CreateTime    *string             `json:"createTime"`
	DisplayName   *string             `json:"displayName"`
	Labels        map[string]string   `json:"labels"`
	Name          *string             `json:"name"`
	PrincipalInfo *PrincipalInfo      `json:"principalInfo"`
	ResourceInfo  *ResourceInfo       `json:"resourceInfo"`
	State         *ConnectorStateEnum `json:"state"`
	UID           *string             `json:"uid"`
	UpdateTime    *string             `json:"updateTime"`
}
