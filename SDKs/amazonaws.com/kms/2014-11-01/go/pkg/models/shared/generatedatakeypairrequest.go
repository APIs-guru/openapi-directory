package shared

type GenerateDataKeyPairRequest struct {
	EncryptionContext map[string]string   `json:"EncryptionContext"`
	GrantTokens       []string            `json:"GrantTokens"`
	KeyID             string              `json:"KeyId"`
	KeyPairSpec       DataKeyPairSpecEnum `json:"KeyPairSpec"`
}
