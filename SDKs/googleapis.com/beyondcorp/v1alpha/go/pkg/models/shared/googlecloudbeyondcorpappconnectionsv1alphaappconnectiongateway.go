package shared

type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum string

const (
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnumTypeUnspecified GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnumGcpRegionalMig  GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum = "GCP_REGIONAL_MIG"
)

type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway struct {
	AppGateway  *string                                                                 `json:"appGateway"`
	IngressPort *int32                                                                  `json:"ingressPort"`
	L7psc       *string                                                                 `json:"l7psc"`
	Type        *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum `json:"type"`
	URI         *string                                                                 `json:"uri"`
}
