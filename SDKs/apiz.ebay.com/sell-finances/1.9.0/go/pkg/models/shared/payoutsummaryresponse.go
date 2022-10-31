package shared



type PayoutSummaryResponse struct {
    Amount *Amount `json:"amount,omitempty"`
    PayoutCount *int32 `json:"payoutCount,omitempty"`
    TransactionCount *int32 `json:"transactionCount,omitempty"`
    
}

