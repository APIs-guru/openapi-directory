package shared

type GetMailboxDetailsResponse struct {
	MailboxQuota *int64   `json:"MailboxQuota"`
	MailboxSize  *float64 `json:"MailboxSize"`
}
