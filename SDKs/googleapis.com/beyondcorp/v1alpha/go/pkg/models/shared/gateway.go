package shared

type GatewayTypeEnum string

const (
	GatewayTypeEnumTypeUnspecified GatewayTypeEnum = "TYPE_UNSPECIFIED"
	GatewayTypeEnumGcpRegionalMig  GatewayTypeEnum = "GCP_REGIONAL_MIG"
)

type Gateway struct {
	Type     *GatewayTypeEnum `json:"type"`
	URI      *string          `json:"uri"`
	UserPort *int32           `json:"userPort"`
}
