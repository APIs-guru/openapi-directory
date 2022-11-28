package shared

// ProtectionGroup
// A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
type ProtectionGroup struct {
	Aggregation        ProtectionGroupAggregationEnum `json:"Aggregation"`
	Members            []string                       `json:"Members"`
	Pattern            ProtectionGroupPatternEnum     `json:"Pattern"`
	ProtectionGroupArn *string                        `json:"ProtectionGroupArn,omitempty"`
	ProtectionGroupID  string                         `json:"ProtectionGroupId"`
	ResourceType       *ProtectedResourceTypeEnum     `json:"ResourceType,omitempty"`
}
