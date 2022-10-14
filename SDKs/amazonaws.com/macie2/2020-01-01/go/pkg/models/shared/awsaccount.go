package shared

type AwsAccount struct {
	AccountID   *string `json:"accountId,omitempty"`
	PrincipalID *string `json:"principalId,omitempty"`
}
