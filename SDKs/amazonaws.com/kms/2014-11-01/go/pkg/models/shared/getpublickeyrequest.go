package shared



type GetPublicKeyRequest struct {
    GrantTokens []string `json:"GrantTokens,omitempty"`
    KeyID string `json:"KeyId"`
    
}

