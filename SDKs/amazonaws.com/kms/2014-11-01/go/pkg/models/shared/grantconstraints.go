package shared

type GrantConstraints struct {
	EncryptionContextEquals map[string]string `json:"EncryptionContextEquals"`
	EncryptionContextSubset map[string]string `json:"EncryptionContextSubset"`
}
