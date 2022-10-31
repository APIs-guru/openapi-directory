package shared



type FirewallDomainList struct {
    Arn *string `json:"Arn,omitempty"`
    CreationTime *string `json:"CreationTime,omitempty"`
    CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
    DomainCount *int64 `json:"DomainCount,omitempty"`
    ID *string `json:"Id,omitempty"`
    ManagedOwnerName *string `json:"ManagedOwnerName,omitempty"`
    ModificationTime *string `json:"ModificationTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    Status *FirewallDomainListStatusEnum `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    
}

