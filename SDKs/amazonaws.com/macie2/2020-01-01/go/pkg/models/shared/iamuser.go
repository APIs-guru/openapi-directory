package shared

// IamUser
// Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.
type IamUser struct {
	AccountID   *string `json:"accountId,omitempty"`
	Arn         *string `json:"arn,omitempty"`
	PrincipalID *string `json:"principalId,omitempty"`
	UserName    *string `json:"userName,omitempty"`
}
