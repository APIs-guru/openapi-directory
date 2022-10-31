package shared



type CreateKeyPairRequest struct {
    KeyPairName string `json:"keyPairName"`
    Tags []Tag `json:"tags,omitempty"`
    
}

