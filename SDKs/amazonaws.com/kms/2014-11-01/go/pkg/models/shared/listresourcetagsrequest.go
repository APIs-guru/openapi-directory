package shared



type ListResourceTagsRequest struct {
    KeyID string `json:"KeyId"`
    Limit *int64 `json:"Limit,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

