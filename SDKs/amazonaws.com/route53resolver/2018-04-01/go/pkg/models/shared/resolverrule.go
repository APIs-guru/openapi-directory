package shared



type ResolverRule struct {
    Arn *string `json:"Arn,omitempty"`
    CreationTime *string `json:"CreationTime,omitempty"`
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    DomainName *string `json:"DomainName,omitempty"`
    ID *string `json:"Id,omitempty"`
    ModificationTime *string `json:"ModificationTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    ResolverEndpointID *string `json:"ResolverEndpointId,omitempty"`
    RuleType *RuleTypeOptionEnum `json:"RuleType,omitempty"`
    ShareStatus *ShareStatusEnum `json:"ShareStatus,omitempty"`
    Status *ResolverRuleStatusEnum `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    TargetIps []TargetAddress `json:"TargetIps,omitempty"`
    
}

