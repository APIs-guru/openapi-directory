package shared

type InputOrigin struct {
	Name           *string                       `json:"name,omitempty"`
	ProtocolPolicy *OriginProtocolPolicyEnumEnum `json:"protocolPolicy,omitempty"`
	RegionName     *RegionNameEnum               `json:"regionName,omitempty"`
}
