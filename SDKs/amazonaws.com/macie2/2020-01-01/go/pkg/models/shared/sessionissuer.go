package shared

type SessionIssuer struct {
	AccountID   *string `json:"accountId"`
	Arn         *string `json:"arn"`
	PrincipalID *string `json:"principalId"`
	Type        *string `json:"type"`
	UserName    *string `json:"userName"`
}
