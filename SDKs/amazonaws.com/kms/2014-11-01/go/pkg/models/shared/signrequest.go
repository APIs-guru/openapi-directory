package shared



type SignRequest struct {
    GrantTokens []string `json:"GrantTokens,omitempty"`
    KeyID string `json:"KeyId"`
    Message string `json:"Message"`
    MessageType *MessageTypeEnum `json:"MessageType,omitempty"`
    SigningAlgorithm SigningAlgorithmSpecEnum `json:"SigningAlgorithm"`
    
}

