package shared



type CreateKeyRequest struct {
    BypassPolicyLockoutSafetyCheck *bool `json:"BypassPolicyLockoutSafetyCheck,omitempty"`
    CustomKeyStoreID *string `json:"CustomKeyStoreId,omitempty"`
    CustomerMasterKeySpec *CustomerMasterKeySpecEnum `json:"CustomerMasterKeySpec,omitempty"`
    Description *string `json:"Description,omitempty"`
    KeySpec *KeySpecEnum `json:"KeySpec,omitempty"`
    KeyUsage *KeyUsageTypeEnum `json:"KeyUsage,omitempty"`
    MultiRegion *bool `json:"MultiRegion,omitempty"`
    Origin *OriginTypeEnum `json:"Origin,omitempty"`
    Policy *string `json:"Policy,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

