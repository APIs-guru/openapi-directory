package shared




type GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum string

const (
    GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumStateUnspecified GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "STATE_UNSPECIFIED"
GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumCreating GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "CREATING"
GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumCreated GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "CREATED"
GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumUpdating GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "UPDATING"
GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumDeleting GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "DELETING"
GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnumDown GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum = "DOWN"
)


type GoogleCloudBeyondcorpAppconnectorsV1AppConnector struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    PrincipalInfo *GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo `json:"principalInfo,omitempty"`
    ResourceInfo *GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo `json:"resourceInfo,omitempty"`
    State *GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum `json:"state,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

