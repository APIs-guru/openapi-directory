package shared




type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum string

const (
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumStateUnspecified GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "STATE_UNSPECIFIED"
GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumCreating GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "CREATING"
GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumCreated GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "CREATED"
GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumUpdating GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "UPDATING"
GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumDeleting GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "DELETING"
GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumDown GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "DOWN"
)



type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum string

const (
    GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnumTypeUnspecified GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum = "TYPE_UNSPECIFIED"
GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnumTCPProxy GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum = "TCP_PROXY"
)


type GoogleCloudBeyondcorpAppconnectionsV1AppConnection struct {
    ApplicationEndpoint *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint `json:"applicationEndpoint,omitempty"`
    Connectors []string `json:"connectors,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Gateway *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway `json:"gateway,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    State *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum `json:"state,omitempty"`
    Type *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum `json:"type,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

