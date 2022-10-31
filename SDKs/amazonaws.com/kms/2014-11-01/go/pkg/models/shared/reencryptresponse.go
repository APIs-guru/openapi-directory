package shared



type ReEncryptResponse struct {
    CiphertextBlob *string `json:"CiphertextBlob,omitempty"`
    DestinationEncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"DestinationEncryptionAlgorithm,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    SourceEncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"SourceEncryptionAlgorithm,omitempty"`
    SourceKeyID *string `json:"SourceKeyId,omitempty"`
    
}

