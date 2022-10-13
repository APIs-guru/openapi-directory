package shared

type GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum string

const (
	GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumStateUnspecified GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumCreating         GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "CREATING"
	GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumCreated          GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "CREATED"
	GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumUpdating         GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "UPDATING"
	GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumDeleting         GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "DELETING"
	GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnumDown             GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum = "DOWN"
)

type GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection struct {
	Connectors       []string                                                          `json:"connectors"`
	CreateTime       *string                                                           `json:"createTime"`
	DestinationCidrs []string                                                          `json:"destinationCidrs"`
	DisplayName      *string                                                           `json:"displayName"`
	Labels           map[string]string                                                 `json:"labels"`
	Name             *string                                                           `json:"name"`
	NetworkVpc       *string                                                           `json:"networkVpc"`
	State            *GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum `json:"state"`
	UID              *string                                                           `json:"uid"`
	UpdateTime       *string                                                           `json:"updateTime"`
}
