package shared

type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum string

const (
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnumTypeUnspecified GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnumGcpRegionalMig  GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum = "GCP_REGIONAL_MIG"
)

// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput
// Gateway represents a user facing component that serves as an entrance to enable connectivity.
type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput struct {
	AppGateway *string                                                            `json:"appGateway,omitempty"`
	Type       *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum `json:"type,omitempty"`
}

// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway
// Gateway represents a user facing component that serves as an entrance to enable connectivity.
type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway struct {
	AppGateway  *string                                                            `json:"appGateway,omitempty"`
	IngressPort *int32                                                             `json:"ingressPort,omitempty"`
	L7psc       *string                                                            `json:"l7psc,omitempty"`
	Type        *GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum `json:"type,omitempty"`
	URI         *string                                                            `json:"uri,omitempty"`
}
