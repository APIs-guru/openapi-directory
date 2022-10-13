package shared

type UpdateProtectionGroupRequest struct {
	Aggregation       ProtectionGroupAggregationEnum `json:"Aggregation"`
	Members           []string                       `json:"Members"`
	Pattern           ProtectionGroupPatternEnum     `json:"Pattern"`
	ProtectionGroupID string                         `json:"ProtectionGroupId"`
	ResourceType      *ProtectedResourceTypeEnum     `json:"ResourceType"`
}
