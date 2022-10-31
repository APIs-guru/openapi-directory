package shared



type CreateMailboxRequest struct {
    AccountID *int32 `json:"account_id,omitempty"`
    EmailAddress *string `json:"email_address,omitempty"`
    Password *string `json:"password,omitempty"`
    
}

