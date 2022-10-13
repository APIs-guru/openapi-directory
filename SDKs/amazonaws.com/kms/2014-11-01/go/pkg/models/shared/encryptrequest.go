package shared

type EncryptRequest struct {
	EncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithm"`
	EncryptionContext   map[string]string            `json:"EncryptionContext"`
	GrantTokens         []string                     `json:"GrantTokens"`
	KeyID               string                       `json:"KeyId"`
	Plaintext           string                       `json:"Plaintext"`
}
