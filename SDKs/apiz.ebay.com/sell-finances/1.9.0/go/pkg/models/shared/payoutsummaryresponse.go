package shared

// PayoutSummaryResponse
// This type is the base response type of the getPayoutSummary method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts.
type PayoutSummaryResponse struct {
	Amount           *Amount `json:"amount,omitempty"`
	PayoutCount      *int32  `json:"payoutCount,omitempty"`
	TransactionCount *int32  `json:"transactionCount,omitempty"`
}
