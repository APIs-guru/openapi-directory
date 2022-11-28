package shared

type GatewayTypeEnum string

const (
	GatewayTypeEnumTypeUnspecified GatewayTypeEnum = "TYPE_UNSPECIFIED"
	GatewayTypeEnumGcpRegionalMig  GatewayTypeEnum = "GCP_REGIONAL_MIG"
)

// GatewayInput
// Gateway represents a user facing component that serves as an entrance to enable connectivity.
type GatewayInput struct {
	Type *GatewayTypeEnum `json:"type,omitempty"`
}

// Gateway
// Gateway represents a user facing component that serves as an entrance to enable connectivity.
type Gateway struct {
	Type     *GatewayTypeEnum `json:"type,omitempty"`
	URI      *string          `json:"uri,omitempty"`
	UserPort *int32           `json:"userPort,omitempty"`
}
