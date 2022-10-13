package shared

type GenerateDataKeyPairWithoutPlaintextRequest struct {
	EncryptionContext map[string]string   `json:"EncryptionContext"`
	GrantTokens       []string            `json:"GrantTokens"`
	KeyID             string              `json:"KeyId"`
	KeyPairSpec       DataKeyPairSpecEnum `json:"KeyPairSpec"`
}
