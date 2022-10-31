package shared



type ListFirewallRuleGroupAssociationsRequest struct {
    FirewallRuleGroupID *string `json:"FirewallRuleGroupId,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Priority *int64 `json:"Priority,omitempty"`
    Status *FirewallRuleGroupAssociationStatusEnum `json:"Status,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

