package shared

type GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum string

const (
	GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnumStateUnspecified GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnumCreating         GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum = "CREATING"
	GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnumCreated          GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum = "CREATED"
	GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnumUpdating         GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum = "UPDATING"
	GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnumDeleting         GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum = "DELETING"
	GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnumDown             GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum = "DOWN"
)

// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput
// A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
type GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInput struct {
	DisplayName   *string                                                             `json:"displayName,omitempty"`
	Labels        map[string]string                                                   `json:"labels,omitempty"`
	Name          *string                                                             `json:"name,omitempty"`
	PrincipalInfo *GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo `json:"principalInfo,omitempty"`
	ResourceInfo  *GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo              `json:"resourceInfo,omitempty"`
}

// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector
// A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
type GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector struct {
	CreateTime    *string                                                             `json:"createTime,omitempty"`
	DisplayName   *string                                                             `json:"displayName,omitempty"`
	Labels        map[string]string                                                   `json:"labels,omitempty"`
	Name          *string                                                             `json:"name,omitempty"`
	PrincipalInfo *GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo `json:"principalInfo,omitempty"`
	ResourceInfo  *GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo              `json:"resourceInfo,omitempty"`
	State         *GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum     `json:"state,omitempty"`
	UID           *string                                                             `json:"uid,omitempty"`
	UpdateTime    *string                                                             `json:"updateTime,omitempty"`
}
