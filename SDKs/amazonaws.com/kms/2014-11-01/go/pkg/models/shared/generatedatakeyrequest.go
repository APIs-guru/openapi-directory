package shared

type GenerateDataKeyRequest struct {
	EncryptionContext map[string]string `json:"EncryptionContext,omitempty"`
	GrantTokens       []string          `json:"GrantTokens,omitempty"`
	KeyID             string            `json:"KeyId"`
	KeySpec           *DataKeySpecEnum  `json:"KeySpec,omitempty"`
	NumberOfBytes     *int64            `json:"NumberOfBytes,omitempty"`
}
