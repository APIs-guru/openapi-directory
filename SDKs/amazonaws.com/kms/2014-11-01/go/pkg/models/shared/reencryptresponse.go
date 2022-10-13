package shared

type ReEncryptResponse struct {
	CiphertextBlob                 *string                      `json:"CiphertextBlob"`
	DestinationEncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"DestinationEncryptionAlgorithm"`
	KeyID                          *string                      `json:"KeyId"`
	SourceEncryptionAlgorithm      *EncryptionAlgorithmSpecEnum `json:"SourceEncryptionAlgorithm"`
	SourceKeyID                    *string                      `json:"SourceKeyId"`
}
