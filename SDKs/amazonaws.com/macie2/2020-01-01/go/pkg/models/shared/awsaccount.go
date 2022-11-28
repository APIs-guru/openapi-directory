package shared

// AwsAccount
// Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account.
type AwsAccount struct {
	AccountID   *string `json:"accountId,omitempty"`
	PrincipalID *string `json:"principalId,omitempty"`
}
