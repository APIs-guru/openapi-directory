package shared



type EncryptRequest struct {
    EncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithm,omitempty"`
    EncryptionContext map[string]string `json:"EncryptionContext,omitempty"`
    GrantTokens []string `json:"GrantTokens,omitempty"`
    KeyID string `json:"KeyId"`
    Plaintext string `json:"Plaintext"`
    
}

