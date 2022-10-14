package shared

type GetAccountBalanceResponse struct {
	AvailableBalance *string `json:"AvailableBalance,omitempty"`
	OnHoldBalance    *string `json:"OnHoldBalance,omitempty"`
}
