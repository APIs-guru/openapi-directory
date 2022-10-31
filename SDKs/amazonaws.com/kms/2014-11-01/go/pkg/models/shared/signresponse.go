package shared



type SignResponse struct {
    KeyID *string `json:"KeyId,omitempty"`
    Signature *string `json:"Signature,omitempty"`
    SigningAlgorithm *SigningAlgorithmSpecEnum `json:"SigningAlgorithm,omitempty"`
    
}

