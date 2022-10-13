package shared

type EncryptResponse struct {
	CiphertextBlob      *string                      `json:"CiphertextBlob"`
	EncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithm"`
	KeyID               *string                      `json:"KeyId"`
}
