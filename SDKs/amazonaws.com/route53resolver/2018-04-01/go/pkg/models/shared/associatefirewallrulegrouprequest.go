package shared



type AssociateFirewallRuleGroupRequest struct {
    CreatorRequestID string `json:"CreatorRequestId"`
    FirewallRuleGroupID string `json:"FirewallRuleGroupId"`
    MutationProtection *MutationProtectionStatusEnum `json:"MutationProtection,omitempty"`
    Name string `json:"Name"`
    Priority int64 `json:"Priority"`
    Tags []Tag `json:"Tags,omitempty"`
    VpcID string `json:"VpcId"`
    
}

