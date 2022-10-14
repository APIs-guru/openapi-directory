package shared

type ListSecretVersionIdsRequest struct {
	IncludeDeprecated *bool   `json:"IncludeDeprecated,omitempty"`
	MaxResults        *int64  `json:"MaxResults,omitempty"`
	NextToken         *string `json:"NextToken,omitempty"`
	SecretID          string  `json:"SecretId"`
}
