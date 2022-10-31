package shared



type ResolverRuleAssociation struct {
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    ResolverRuleID *string `json:"ResolverRuleId,omitempty"`
    Status *ResolverRuleAssociationStatusEnum `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    VpcID *string `json:"VPCId,omitempty"`
    
}

