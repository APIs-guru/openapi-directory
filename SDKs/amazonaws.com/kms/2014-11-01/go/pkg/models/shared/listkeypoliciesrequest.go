package shared



type ListKeyPoliciesRequest struct {
    KeyID string `json:"KeyId"`
    Limit *int64 `json:"Limit,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

