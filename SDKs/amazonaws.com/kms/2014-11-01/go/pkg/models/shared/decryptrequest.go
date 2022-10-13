package shared

type DecryptRequest struct {
	CiphertextBlob      string                       `json:"CiphertextBlob"`
	EncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithm"`
	EncryptionContext   map[string]string            `json:"EncryptionContext"`
	GrantTokens         []string                     `json:"GrantTokens"`
	KeyID               *string                      `json:"KeyId"`
}
