package shared

type Origin struct {
	Name           *string                       `json:"name"`
	ProtocolPolicy *OriginProtocolPolicyEnumEnum `json:"protocolPolicy"`
	RegionName     *RegionNameEnum               `json:"regionName"`
	ResourceType   *ResourceTypeEnum             `json:"resourceType"`
}
