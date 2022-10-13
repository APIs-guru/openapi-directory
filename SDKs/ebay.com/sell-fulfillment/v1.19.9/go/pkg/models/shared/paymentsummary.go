package shared

type PaymentSummary struct {
	Payments       []Payment     `json:"payments"`
	Refunds        []OrderRefund `json:"refunds"`
	TotalDueSeller *Amount       `json:"totalDueSeller"`
}
