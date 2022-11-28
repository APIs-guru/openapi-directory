package shared

// BalanceAdjustment
// This type is used by the balanceAdjustment container, which shows the seller payout balance that will be applied toward the charges outlined in the charges array.
type BalanceAdjustment struct {
	AdjustmentAmount *Amount `json:"adjustmentAmount,omitempty"`
	AdjustmentType   *string `json:"adjustmentType,omitempty"`
}
