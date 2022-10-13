package shared

type ReEncryptRequest struct {
	CiphertextBlob                 string                       `json:"CiphertextBlob"`
	DestinationEncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"DestinationEncryptionAlgorithm"`
	DestinationEncryptionContext   map[string]string            `json:"DestinationEncryptionContext"`
	DestinationKeyID               string                       `json:"DestinationKeyId"`
	GrantTokens                    []string                     `json:"GrantTokens"`
	SourceEncryptionAlgorithm      *EncryptionAlgorithmSpecEnum `json:"SourceEncryptionAlgorithm"`
	SourceEncryptionContext        map[string]string            `json:"SourceEncryptionContext"`
	SourceKeyID                    *string                      `json:"SourceKeyId"`
}
