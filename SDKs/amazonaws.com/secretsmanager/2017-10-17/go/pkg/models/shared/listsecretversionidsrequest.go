package shared

type ListSecretVersionIdsRequest struct {
	IncludeDeprecated *bool   `json:"IncludeDeprecated"`
	MaxResults        *int64  `json:"MaxResults"`
	NextToken         *string `json:"NextToken"`
	SecretID          string  `json:"SecretId"`
}
