package shared



type GenerateDataKeyResponse struct {
    CiphertextBlob *string `json:"CiphertextBlob,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    Plaintext *string `json:"Plaintext,omitempty"`
    
}

