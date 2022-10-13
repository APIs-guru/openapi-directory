package shared

type GetAccountSettingsResponse struct {
	AccountLimit *AccountLimit `json:"AccountLimit"`
	AccountUsage *AccountUsage `json:"AccountUsage"`
}
