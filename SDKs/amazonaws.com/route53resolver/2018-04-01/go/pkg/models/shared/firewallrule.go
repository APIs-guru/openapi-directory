package shared



type FirewallRule struct {
    Action *ActionEnum `json:"Action,omitempty"`
    BlockOverrideDNSType *BlockOverrideDNSTypeEnum `json:"BlockOverrideDnsType,omitempty"`
    BlockOverrideDomain *string `json:"BlockOverrideDomain,omitempty"`
    BlockOverrideTTL *int64 `json:"BlockOverrideTtl,omitempty"`
    BlockResponse *BlockResponseEnum `json:"BlockResponse,omitempty"`
    CreationTime *string `json:"CreationTime,omitempty"`
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    FirewallDomainListID *string `json:"FirewallDomainListId,omitempty"`
    FirewallRuleGroupID *string `json:"FirewallRuleGroupId,omitempty"`
    ModificationTime *string `json:"ModificationTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    Priority *int64 `json:"Priority,omitempty"`
    
}

