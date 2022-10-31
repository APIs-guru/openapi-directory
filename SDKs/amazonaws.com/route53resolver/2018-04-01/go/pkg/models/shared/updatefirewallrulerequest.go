package shared



type UpdateFirewallRuleRequest struct {
    Action *ActionEnum `json:"Action,omitempty"`
    BlockOverrideDNSType *BlockOverrideDNSTypeEnum `json:"BlockOverrideDnsType,omitempty"`
    BlockOverrideDomain *string `json:"BlockOverrideDomain,omitempty"`
    BlockOverrideTTL *int64 `json:"BlockOverrideTtl,omitempty"`
    BlockResponse *BlockResponseEnum `json:"BlockResponse,omitempty"`
    FirewallDomainListID string `json:"FirewallDomainListId"`
    FirewallRuleGroupID string `json:"FirewallRuleGroupId"`
    Name *string `json:"Name,omitempty"`
    Priority *int64 `json:"Priority,omitempty"`
    
}

