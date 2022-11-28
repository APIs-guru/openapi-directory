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

// Connector
// A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
type Connector struct {
	CreateTime    *string             `json:"createTime,omitempty"`
	DisplayName   *string             `json:"displayName,omitempty"`
	Labels        map[string]string   `json:"labels,omitempty"`
	Name          *string             `json:"name,omitempty"`
	PrincipalInfo *PrincipalInfo      `json:"principalInfo,omitempty"`
	ResourceInfo  *ResourceInfo       `json:"resourceInfo,omitempty"`
	State         *ConnectorStateEnum `json:"state,omitempty"`
	UID           *string             `json:"uid,omitempty"`
	UpdateTime    *string             `json:"updateTime,omitempty"`
}

// ConnectorInput
// A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
type ConnectorInput struct {
	DisplayName   *string           `json:"displayName,omitempty"`
	Labels        map[string]string `json:"labels,omitempty"`
	Name          *string           `json:"name,omitempty"`
	PrincipalInfo *PrincipalInfo    `json:"principalInfo,omitempty"`
	ResourceInfo  *ResourceInfo     `json:"resourceInfo,omitempty"`
}
