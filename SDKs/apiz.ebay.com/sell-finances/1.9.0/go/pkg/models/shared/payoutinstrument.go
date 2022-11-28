package shared

// PayoutInstrument
// This type provides details about the seller's account that received (or is scheduled to receive) a payout.
type PayoutInstrument struct {
	AccountLastFourDigits *string `json:"accountLastFourDigits,omitempty"`
	InstrumentType        *string `json:"instrumentType,omitempty"`
	Nickname              *string `json:"nickname,omitempty"`
}
