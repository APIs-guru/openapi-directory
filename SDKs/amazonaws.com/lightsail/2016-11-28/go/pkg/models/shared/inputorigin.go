package shared

type InputOrigin struct {
	Name           *string                       `json:"name"`
	ProtocolPolicy *OriginProtocolPolicyEnumEnum `json:"protocolPolicy"`
	RegionName     *RegionNameEnum               `json:"regionName"`
}
