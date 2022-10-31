package shared



type PasswordData struct {
    Ciphertext *string `json:"ciphertext,omitempty"`
    KeyPairName *string `json:"keyPairName,omitempty"`
    
}

