package shared



type CreateFirewallRuleRequest struct {
    Action ActionEnum `json:"Action"`
    BlockOverrideDNSType *BlockOverrideDNSTypeEnum `json:"BlockOverrideDnsType,omitempty"`
    BlockOverrideDomain *string `json:"BlockOverrideDomain,omitempty"`
    BlockOverrideTTL *int64 `json:"BlockOverrideTtl,omitempty"`
    BlockResponse *BlockResponseEnum `json:"BlockResponse,omitempty"`
    CreatorRequestID string `json:"CreatorRequestId"`
    FirewallDomainListID string `json:"FirewallDomainListId"`
    FirewallRuleGroupID string `json:"FirewallRuleGroupId"`
    Name string `json:"Name"`
    Priority int64 `json:"Priority"`
    
}

