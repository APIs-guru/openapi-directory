package shared

type GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum string

const (
	GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumStateUnspecified GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumCreating         GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "CREATING"
	GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumCreated          GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "CREATED"
	GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumUpdating         GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "UPDATING"
	GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumDeleting         GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "DELETING"
	GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumDown             GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "DOWN"
)

// GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput
// A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
type GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput struct {
	DisplayName   *string                                                        `json:"displayName,omitempty"`
	Labels        map[string]string                                              `json:"labels,omitempty"`
	Name          *string                                                        `json:"name,omitempty"`
	PrincipalInfo *GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo `json:"principalInfo,omitempty"`
	ResourceInfo  *GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo              `json:"resourceInfo,omitempty"`
}

// GoogleCloudBeyondcorpAppconnectorsV1AppConnector
// A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
type GoogleCloudBeyondcorpAppconnectorsV1AppConnector struct {
	CreateTime    *string                                                        `json:"createTime,omitempty"`
	DisplayName   *string                                                        `json:"displayName,omitempty"`
	Labels        map[string]string                                              `json:"labels,omitempty"`
	Name          *string                                                        `json:"name,omitempty"`
	PrincipalInfo *GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo `json:"principalInfo,omitempty"`
	ResourceInfo  *GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo              `json:"resourceInfo,omitempty"`
	State         *GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum     `json:"state,omitempty"`
	UID           *string                                                        `json:"uid,omitempty"`
	UpdateTime    *string                                                        `json:"updateTime,omitempty"`
}
