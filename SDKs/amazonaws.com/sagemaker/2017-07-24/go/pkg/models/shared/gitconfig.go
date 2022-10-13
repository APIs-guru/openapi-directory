package shared

type GitConfig struct {
	Branch        *string `json:"Branch"`
	RepositoryURL string  `json:"RepositoryUrl"`
	SecretArn     *string `json:"SecretArn"`
}
