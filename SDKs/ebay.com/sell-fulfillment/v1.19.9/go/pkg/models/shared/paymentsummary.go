package shared

// PaymentSummary
// This type contains information about the various monetary exchanges that apply to the net balance due for the order.
type PaymentSummary struct {
	Payments       []Payment     `json:"payments,omitempty"`
	Refunds        []OrderRefund `json:"refunds,omitempty"`
	TotalDueSeller *Amount       `json:"totalDueSeller,omitempty"`
}
