package shared



type HandshakeResource struct {
    Resources []HandshakeResource `json:"Resources,omitempty"`
    Type *HandshakeResourceTypeEnum `json:"Type,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

