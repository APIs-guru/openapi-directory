package shared



type DecryptRequest struct {
    CiphertextBlob string `json:"CiphertextBlob"`
    EncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithm,omitempty"`
    EncryptionContext map[string]string `json:"EncryptionContext,omitempty"`
    GrantTokens []string `json:"GrantTokens,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    
}

