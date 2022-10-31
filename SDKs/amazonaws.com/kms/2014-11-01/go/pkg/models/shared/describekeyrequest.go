package shared

type DescribeKeyRequest struct {
	GrantTokens []string `json:"GrantTokens,omitempty"`
	KeyID       string   `json:"KeyId"`
}
