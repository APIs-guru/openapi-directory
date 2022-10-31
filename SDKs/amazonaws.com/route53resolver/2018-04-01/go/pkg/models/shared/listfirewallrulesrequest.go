package shared



type ListFirewallRulesRequest struct {
    Action *ActionEnum `json:"Action,omitempty"`
    FirewallRuleGroupID string `json:"FirewallRuleGroupId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Priority *int64 `json:"Priority,omitempty"`
    
}

