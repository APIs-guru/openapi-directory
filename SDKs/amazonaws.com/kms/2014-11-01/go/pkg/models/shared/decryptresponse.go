package shared

type DecryptResponse struct {
	EncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithm"`
	KeyID               *string                      `json:"KeyId"`
	Plaintext           *string                      `json:"Plaintext"`
}
