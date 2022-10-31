package shared

type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum string

const (
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnumTypeUnspecified GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnumGcpRegionalMig  GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum = "GCP_REGIONAL_MIG"
)

type GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway struct {
	AppGateway  *string                                                                 `json:"appGateway,omitempty"`
	IngressPort *int32                                                                  `json:"ingressPort,omitempty"`
	L7psc       *string                                                                 `json:"l7psc,omitempty"`
	Type        *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum `json:"type,omitempty"`
	URI         *string                                                                 `json:"uri,omitempty"`
}
