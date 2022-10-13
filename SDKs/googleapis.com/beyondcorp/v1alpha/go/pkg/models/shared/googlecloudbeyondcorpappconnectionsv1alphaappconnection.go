package shared

type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum string

const (
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumStateUnspecified GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumCreating         GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "CREATING"
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumCreated          GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "CREATED"
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumUpdating         GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "UPDATING"
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumDeleting         GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "DELETING"
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnumDown             GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum = "DOWN"
)

type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum string

const (
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnumTypeUnspecified GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnumTCPProxy        GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum = "TCP_PROXY"
)

type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection struct {
	ApplicationEndpoint *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint `json:"applicationEndpoint"`
	Connectors          []string                                                                    `json:"connectors"`
	CreateTime          *string                                                                     `json:"createTime"`
	DisplayName         *string                                                                     `json:"displayName"`
	Gateway             *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway             `json:"gateway"`
	Labels              map[string]string                                                           `json:"labels"`
	Name                *string                                                                     `json:"name"`
	State               *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum           `json:"state"`
	Type                *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum            `json:"type"`
	UID                 *string                                                                     `json:"uid"`
	UpdateTime          *string                                                                     `json:"updateTime"`
}
