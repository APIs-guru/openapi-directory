package shared

type GenerateDataKeyPairRequest struct {
	EncryptionContext map[string]string   `json:"EncryptionContext,omitempty"`
	GrantTokens       []string            `json:"GrantTokens,omitempty"`
	KeyID             string              `json:"KeyId"`
	KeyPairSpec       DataKeyPairSpecEnum `json:"KeyPairSpec"`
}
