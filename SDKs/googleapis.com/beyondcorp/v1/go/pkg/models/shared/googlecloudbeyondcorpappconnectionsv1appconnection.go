package shared

type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum string

const (
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumStateUnspecified GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumCreating         GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "CREATING"
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumCreated          GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "CREATED"
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumUpdating         GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "UPDATING"
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumDeleting         GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "DELETING"
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnumDown             GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum = "DOWN"
)

type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum string

const (
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnumTypeUnspecified GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnumTCPProxy        GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum = "TCP_PROXY"
)

type GoogleCloudBeyondcorpAppconnectionsV1AppConnection struct {
	ApplicationEndpoint *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint `json:"applicationEndpoint"`
	Connectors          []string                                                               `json:"connectors"`
	CreateTime          *string                                                                `json:"createTime"`
	DisplayName         *string                                                                `json:"displayName"`
	Gateway             *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway             `json:"gateway"`
	Labels              map[string]string                                                      `json:"labels"`
	Name                *string                                                                `json:"name"`
	State               *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum           `json:"state"`
	Type                *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum            `json:"type"`
	UID                 *string                                                                `json:"uid"`
	UpdateTime          *string                                                                `json:"updateTime"`
}
