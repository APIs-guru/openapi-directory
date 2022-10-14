package shared

type MonetaryTransaction struct {
	Amount *DisputeAmount `json:"amount,omitempty"`
	Date   *string        `json:"date,omitempty"`
	Reason *string        `json:"reason,omitempty"`
	Type   *string        `json:"type,omitempty"`
}
