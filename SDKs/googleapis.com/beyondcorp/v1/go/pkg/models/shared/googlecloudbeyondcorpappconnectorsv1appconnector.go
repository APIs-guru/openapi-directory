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

type GoogleCloudBeyondcorpAppconnectorsV1AppConnector struct {
	CreateTime    *string                                                        `json:"createTime"`
	DisplayName   *string                                                        `json:"displayName"`
	Labels        map[string]string                                              `json:"labels"`
	Name          *string                                                        `json:"name"`
	PrincipalInfo *GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo `json:"principalInfo"`
	ResourceInfo  *GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo              `json:"resourceInfo"`
	State         *GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum     `json:"state"`
	UID           *string                                                        `json:"uid"`
	UpdateTime    *string                                                        `json:"updateTime"`
}
