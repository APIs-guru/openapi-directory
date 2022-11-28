package shared

// GitConfigForUpdate
// Specifies configuration details for a Git repository when the repository is updated.
type GitConfigForUpdate struct {
	SecretArn *string `json:"SecretArn,omitempty"`
}
