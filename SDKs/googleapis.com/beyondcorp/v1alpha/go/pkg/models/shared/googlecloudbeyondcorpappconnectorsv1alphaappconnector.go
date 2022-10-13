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

type GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector struct {
	CreateTime    *string                                                             `json:"createTime"`
	DisplayName   *string                                                             `json:"displayName"`
	Labels        map[string]string                                                   `json:"labels"`
	Name          *string                                                             `json:"name"`
	PrincipalInfo *GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo `json:"principalInfo"`
	ResourceInfo  *GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo              `json:"resourceInfo"`
	State         *GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorStateEnum     `json:"state"`
	UID           *string                                                             `json:"uid"`
	UpdateTime    *string                                                             `json:"updateTime"`
}
