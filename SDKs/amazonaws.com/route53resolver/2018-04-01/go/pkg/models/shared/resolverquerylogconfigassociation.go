package shared



type ResolverQueryLogConfigAssociation struct {
    CreationTime *string `json:"CreationTime,omitempty"`
    Error *ResolverQueryLogConfigAssociationErrorEnum `json:"Error,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    ID *string `json:"Id,omitempty"`
    ResolverQueryLogConfigID *string `json:"ResolverQueryLogConfigId,omitempty"`
    ResourceID *string `json:"ResourceId,omitempty"`
    Status *ResolverQueryLogConfigAssociationStatusEnum `json:"Status,omitempty"`
    
}

