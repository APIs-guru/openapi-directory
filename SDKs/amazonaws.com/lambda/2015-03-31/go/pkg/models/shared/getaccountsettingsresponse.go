package shared



type GetAccountSettingsResponse struct {
    AccountLimit *AccountLimit `json:"AccountLimit,omitempty"`
    AccountUsage *AccountUsage `json:"AccountUsage,omitempty"`
    
}

