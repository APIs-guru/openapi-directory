package shared

type UserIdentityRoot struct {
	AccountID   *string `json:"accountId"`
	Arn         *string `json:"arn"`
	PrincipalID *string `json:"principalId"`
}
