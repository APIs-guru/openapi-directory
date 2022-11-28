package shared

// Fee
// This type is used to display fees that are automatically deducted from seller payouts.
type Fee struct {
	Amount  *Amount `json:"amount,omitempty"`
	FeeMemo *string `json:"feeMemo,omitempty"`
	FeeType *string `json:"feeType,omitempty"`
}
