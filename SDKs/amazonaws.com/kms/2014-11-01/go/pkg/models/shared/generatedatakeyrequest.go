package shared

type GenerateDataKeyRequest struct {
	EncryptionContext map[string]string `json:"EncryptionContext"`
	GrantTokens       []string          `json:"GrantTokens"`
	KeyID             string            `json:"KeyId"`
	KeySpec           *DataKeySpecEnum  `json:"KeySpec"`
	NumberOfBytes     *int64            `json:"NumberOfBytes"`
}
