package shared



type ImportKeyPairRequest struct {
    KeyPairName string `json:"keyPairName"`
    PublicKeyBase64 string `json:"publicKeyBase64"`
    
}

