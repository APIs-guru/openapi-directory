package shared



type VerifyResponse struct {
    KeyID *string `json:"KeyId,omitempty"`
    SignatureValid *bool `json:"SignatureValid,omitempty"`
    SigningAlgorithm *SigningAlgorithmSpecEnum `json:"SigningAlgorithm,omitempty"`
    
}

