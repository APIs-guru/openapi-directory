package shared



type GetMailboxDetailsResponse struct {
    MailboxQuota *int64 `json:"MailboxQuota,omitempty"`
    MailboxSize *float64 `json:"MailboxSize,omitempty"`
    
}

