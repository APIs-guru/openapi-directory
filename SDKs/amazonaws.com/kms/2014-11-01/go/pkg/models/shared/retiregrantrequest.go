package shared



type RetireGrantRequest struct {
    GrantID *string `json:"GrantId,omitempty"`
    GrantToken *string `json:"GrantToken,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    
}

