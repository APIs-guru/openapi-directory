package shared

type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum string

const (
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnumTypeUnspecified GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnumGcpRegionalMig  GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum = "GCP_REGIONAL_MIG"
)

type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway struct {
	AppGateway  *string                                                            `json:"appGateway"`
	IngressPort *int32                                                             `json:"ingressPort"`
	L7psc       *string                                                            `json:"l7psc"`
	Type        *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum `json:"type"`
	URI         *string                                                            `json:"uri"`
}
