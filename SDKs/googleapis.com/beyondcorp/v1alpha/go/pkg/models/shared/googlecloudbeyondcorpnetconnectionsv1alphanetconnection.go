package shared




type GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum string

const (
    GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumStateUnspecified GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "STATE_UNSPECIFIED"
GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumCreating GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "CREATING"
GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumCreated GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "CREATED"
GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumUpdating GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "UPDATING"
GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumDeleting GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "DELETING"
GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumDown GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "DOWN"
)


type GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection struct {
    Connectors []string `json:"connectors,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DestinationCidrs []string `json:"destinationCidrs,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkVpc *string `json:"networkVpc,omitempty"`
    State *GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum `json:"state,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

