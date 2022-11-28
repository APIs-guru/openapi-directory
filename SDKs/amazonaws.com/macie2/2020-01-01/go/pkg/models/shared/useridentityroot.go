package shared

// UserIdentityRoot
// Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.
type UserIdentityRoot struct {
	AccountID   *string `json:"accountId,omitempty"`
	Arn         *string `json:"arn,omitempty"`
	PrincipalID *string `json:"principalId,omitempty"`
}
