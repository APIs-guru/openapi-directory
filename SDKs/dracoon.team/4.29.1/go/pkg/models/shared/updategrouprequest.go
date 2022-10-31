package shared



type UpdateGroupRequest struct {
    Expiration *ObjectExpiration `json:"expiration,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

