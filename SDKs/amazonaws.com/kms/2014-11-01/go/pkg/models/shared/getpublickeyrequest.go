package shared

type GetPublicKeyRequest struct {
	GrantTokens []string `json:"GrantTokens"`
	KeyID       string   `json:"KeyId"`
}
