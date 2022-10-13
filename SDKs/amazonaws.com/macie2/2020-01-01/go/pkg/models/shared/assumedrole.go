package shared

type AssumedRole struct {
	AccessKeyID    *string         `json:"accessKeyId"`
	AccountID      *string         `json:"accountId"`
	Arn            *string         `json:"arn"`
	PrincipalID    *string         `json:"principalId"`
	SessionContext *SessionContext `json:"sessionContext"`
}
