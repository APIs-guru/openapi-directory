package shared



type FirewallRuleGroup struct {
    Arn *string `json:"Arn,omitempty"`
    CreationTime *string `json:"CreationTime,omitempty"`
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    ID *string `json:"Id,omitempty"`
    ModificationTime *string `json:"ModificationTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    RuleCount *int64 `json:"RuleCount,omitempty"`
    ShareStatus *ShareStatusEnum `json:"ShareStatus,omitempty"`
    Status *FirewallRuleGroupStatusEnum `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    
}

