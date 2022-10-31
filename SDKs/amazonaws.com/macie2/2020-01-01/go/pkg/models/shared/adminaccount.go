package shared



type AdminAccount struct {
    AccountID *string `json:"accountId,omitempty"`
    Status *AdminStatusEnum `json:"status,omitempty"`
    
}

