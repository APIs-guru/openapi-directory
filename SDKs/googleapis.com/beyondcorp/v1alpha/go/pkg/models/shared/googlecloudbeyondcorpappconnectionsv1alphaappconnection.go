package shared




type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum string

const (
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumStateUnspecified GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "STATE_UNSPECIFIED"
GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumCreating GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "CREATING"
GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumCreated GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "CREATED"
GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumUpdating GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "UPDATING"
GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumDeleting GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "DELETING"
GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumDown GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "DOWN"
)



type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum string

const (
    GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnumTypeUnspecified GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum = "TYPE_UNSPECIFIED"
GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnumTCPProxy GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum = "TCP_PROXY"
)


type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection struct {
    ApplicationEndpoint *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint `json:"applicationEndpoint,omitempty"`
    Connectors []string `json:"connectors,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Gateway *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway `json:"gateway,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    State *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum `json:"state,omitempty"`
    Type *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum `json:"type,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

