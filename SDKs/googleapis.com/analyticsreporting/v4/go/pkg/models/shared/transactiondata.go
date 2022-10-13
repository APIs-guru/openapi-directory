package shared

type TransactionData struct {
	TransactionID       *string  `json:"transactionId"`
	TransactionRevenue  *float64 `json:"transactionRevenue"`
	TransactionShipping *float64 `json:"transactionShipping"`
	TransactionTax      *float64 `json:"transactionTax"`
}
