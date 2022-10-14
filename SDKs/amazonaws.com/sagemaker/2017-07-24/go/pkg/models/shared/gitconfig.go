package shared

type GitConfig struct {
	Branch        *string `json:"Branch,omitempty"`
	RepositoryURL string  `json:"RepositoryUrl"`
	SecretArn     *string `json:"SecretArn,omitempty"`
}
