package shared



type Origin struct {
    Name *string `json:"name,omitempty"`
    ProtocolPolicy *OriginProtocolPolicyEnumEnum `json:"protocolPolicy,omitempty"`
    RegionName *RegionNameEnum `json:"regionName,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    
}

