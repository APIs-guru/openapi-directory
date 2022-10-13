package shared

type GetAccountBalanceResponse struct {
	AvailableBalance *string `json:"AvailableBalance"`
	OnHoldBalance    *string `json:"OnHoldBalance"`
}
