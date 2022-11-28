package shared

// MonetaryTransaction
// This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.
type MonetaryTransaction struct {
	Amount *DisputeAmount `json:"amount,omitempty"`
	Date   *string        `json:"date,omitempty"`
	Reason *string        `json:"reason,omitempty"`
	Type   *string        `json:"type,omitempty"`
}
