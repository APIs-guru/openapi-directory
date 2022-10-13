package shared

type AwsAccount struct {
	AccountID   *string `json:"accountId"`
	PrincipalID *string `json:"principalId"`
}
