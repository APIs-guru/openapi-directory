package shared

type GetSecretValueRequest struct {
	SecretID     string  `json:"SecretId"`
	VersionID    *string `json:"VersionId"`
	VersionStage *string `json:"VersionStage"`
}
