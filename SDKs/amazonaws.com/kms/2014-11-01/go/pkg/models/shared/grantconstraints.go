package shared

type GrantConstraints struct {
	EncryptionContextEquals map[string]string `json:"EncryptionContextEquals,omitempty"`
	EncryptionContextSubset map[string]string `json:"EncryptionContextSubset,omitempty"`
}
