package shared

type TransactionData struct {
	TransactionID       *string  `json:"transactionId,omitempty"`
	TransactionRevenue  *float64 `json:"transactionRevenue,omitempty"`
	TransactionShipping *float64 `json:"transactionShipping,omitempty"`
	TransactionTax      *float64 `json:"transactionTax,omitempty"`
}
