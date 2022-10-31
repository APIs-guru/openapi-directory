package shared



type EncryptResponse struct {
    CiphertextBlob *string `json:"CiphertextBlob,omitempty"`
    EncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithm,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    
}

