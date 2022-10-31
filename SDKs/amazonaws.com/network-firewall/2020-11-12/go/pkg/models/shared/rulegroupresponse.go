package shared



type RuleGroupResponse struct {
    Capacity *int64 `json:"Capacity,omitempty"`
    Description *string `json:"Description,omitempty"`
    RuleGroupArn string `json:"RuleGroupArn"`
    RuleGroupID string `json:"RuleGroupId"`
    RuleGroupName string `json:"RuleGroupName"`
    RuleGroupStatus *ResourceStatusEnum `json:"RuleGroupStatus,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Type *RuleGroupTypeEnum `json:"Type,omitempty"`
    
}

