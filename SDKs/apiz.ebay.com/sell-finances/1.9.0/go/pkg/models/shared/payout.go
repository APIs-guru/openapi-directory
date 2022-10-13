package shared

type Payout struct {
	Amount                  *Amount           `json:"amount"`
	BankReference           *string           `json:"bankReference"`
	LastAttemptedPayoutDate *string           `json:"lastAttemptedPayoutDate"`
	PayoutDate              *string           `json:"payoutDate"`
	PayoutID                *string           `json:"payoutId"`
	PayoutInstrument        *PayoutInstrument `json:"payoutInstrument"`
	PayoutMemo              *string           `json:"payoutMemo"`
	PayoutStatus            *string           `json:"payoutStatus"`
	PayoutStatusDescription *string           `json:"payoutStatusDescription"`
	TransactionCount        *int32            `json:"transactionCount"`
}
