package shared



type FirewallRuleGroupMetadata struct {
    Arn *string `json:"Arn,omitempty"`
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    ShareStatus *ShareStatusEnum `json:"ShareStatus,omitempty"`
    
}

