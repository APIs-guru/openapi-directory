package shared



type CreateProtectionGroupRequest struct {
    Aggregation ProtectionGroupAggregationEnum `json:"Aggregation"`
    Members []string `json:"Members,omitempty"`
    Pattern ProtectionGroupPatternEnum `json:"Pattern"`
    ProtectionGroupID string `json:"ProtectionGroupId"`
    ResourceType *ProtectedResourceTypeEnum `json:"ResourceType,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

