package shared

type BalanceAdjustment struct {
	AdjustmentAmount *Amount `json:"adjustmentAmount"`
	AdjustmentType   *string `json:"adjustmentType"`
}
