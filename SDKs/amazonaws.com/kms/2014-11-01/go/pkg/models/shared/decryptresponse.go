package shared



type DecryptResponse struct {
    EncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithm,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    Plaintext *string `json:"Plaintext,omitempty"`
    
}

