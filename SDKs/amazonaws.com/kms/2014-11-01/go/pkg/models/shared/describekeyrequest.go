package shared

type DescribeKeyRequest struct {
	GrantTokens []string `json:"GrantTokens"`
	KeyID       string   `json:"KeyId"`
}
