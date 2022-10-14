package shared

type ReEncryptRequest struct {
	CiphertextBlob                 string                       `json:"CiphertextBlob"`
	DestinationEncryptionAlgorithm *EncryptionAlgorithmSpecEnum `json:"DestinationEncryptionAlgorithm,omitempty"`
	DestinationEncryptionContext   map[string]string            `json:"DestinationEncryptionContext,omitempty"`
	DestinationKeyID               string                       `json:"DestinationKeyId"`
	GrantTokens                    []string                     `json:"GrantTokens,omitempty"`
	SourceEncryptionAlgorithm      *EncryptionAlgorithmSpecEnum `json:"SourceEncryptionAlgorithm,omitempty"`
	SourceEncryptionContext        map[string]string            `json:"SourceEncryptionContext,omitempty"`
	SourceKeyID                    *string                      `json:"SourceKeyId,omitempty"`
}
