package shared



type CreateKeyPairResult struct {
    KeyPair *KeyPair `json:"keyPair,omitempty"`
    Operation *Operation `json:"operation,omitempty"`
    PrivateKeyBase64 *string `json:"privateKeyBase64,omitempty"`
    PublicKeyBase64 *string `json:"publicKeyBase64,omitempty"`
    
}

