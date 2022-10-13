package shared

type CreateMailboxRequest struct {
	AccountID    *int32  `json:"account_id"`
	EmailAddress *string `json:"email_address"`
	Password     *string `json:"password"`
}
