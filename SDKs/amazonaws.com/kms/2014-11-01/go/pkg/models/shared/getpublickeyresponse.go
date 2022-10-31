package shared



type GetPublicKeyResponse struct {
    CustomerMasterKeySpec *CustomerMasterKeySpecEnum `json:"CustomerMasterKeySpec,omitempty"`
    EncryptionAlgorithms []EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithms,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    KeySpec *KeySpecEnum `json:"KeySpec,omitempty"`
    KeyUsage *KeyUsageTypeEnum `json:"KeyUsage,omitempty"`
    PublicKey *string `json:"PublicKey,omitempty"`
    SigningAlgorithms []SigningAlgorithmSpecEnum `json:"SigningAlgorithms,omitempty"`
    
}

