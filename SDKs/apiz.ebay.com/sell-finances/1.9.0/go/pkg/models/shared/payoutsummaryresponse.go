package shared

type PayoutSummaryResponse struct {
	Amount           *Amount `json:"amount"`
	PayoutCount      *int32  `json:"payoutCount"`
	TransactionCount *int32  `json:"transactionCount"`
}
