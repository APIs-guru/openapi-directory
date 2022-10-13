package shared

type IamUser struct {
	AccountID   *string `json:"accountId"`
	Arn         *string `json:"arn"`
	PrincipalID *string `json:"principalId"`
	UserName    *string `json:"userName"`
}
