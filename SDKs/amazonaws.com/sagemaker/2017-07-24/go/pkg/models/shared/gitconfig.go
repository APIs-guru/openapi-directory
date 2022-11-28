package shared

// GitConfig
// Specifies configuration details for a Git repository in your Amazon Web Services account.
type GitConfig struct {
	Branch        *string `json:"Branch,omitempty"`
	RepositoryURL string  `json:"RepositoryUrl"`
	SecretArn     *string `json:"SecretArn,omitempty"`
}
