package shared



type UpdateMailboxQuotaRequest struct {
    MailboxQuota int64 `json:"MailboxQuota"`
    OrganizationID string `json:"OrganizationId"`
    UserID string `json:"UserId"`
    
}

