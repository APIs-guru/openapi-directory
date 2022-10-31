package shared



type DescribeRuleGroupResponse struct {
    RuleGroup *RuleGroup `json:"RuleGroup,omitempty"`
    RuleGroupResponse RuleGroupResponse `json:"RuleGroupResponse"`
    UpdateToken string `json:"UpdateToken"`
    
}

