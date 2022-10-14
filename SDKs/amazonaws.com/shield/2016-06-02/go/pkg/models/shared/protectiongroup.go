package shared

type ProtectionGroup struct {
	Aggregation        ProtectionGroupAggregationEnum `json:"Aggregation"`
	Members            []string                       `json:"Members"`
	Pattern            ProtectionGroupPatternEnum     `json:"Pattern"`
	ProtectionGroupArn *string                        `json:"ProtectionGroupArn,omitempty"`
	ProtectionGroupID  string                         `json:"ProtectionGroupId"`
	ResourceType       *ProtectedResourceTypeEnum     `json:"ResourceType,omitempty"`
}
