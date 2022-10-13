package shared

type MonetaryTransaction struct {
	Amount *DisputeAmount `json:"amount"`
	Date   *string        `json:"date"`
	Reason *string        `json:"reason"`
	Type   *string        `json:"type"`
}
