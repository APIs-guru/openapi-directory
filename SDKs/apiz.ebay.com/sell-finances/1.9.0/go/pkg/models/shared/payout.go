package shared

type Payout struct {
	Amount                  *Amount           `json:"amount,omitempty"`
	BankReference           *string           `json:"bankReference,omitempty"`
	LastAttemptedPayoutDate *string           `json:"lastAttemptedPayoutDate,omitempty"`
	PayoutDate              *string           `json:"payoutDate,omitempty"`
	PayoutID                *string           `json:"payoutId,omitempty"`
	PayoutInstrument        *PayoutInstrument `json:"payoutInstrument,omitempty"`
	PayoutMemo              *string           `json:"payoutMemo,omitempty"`
	PayoutStatus            *string           `json:"payoutStatus,omitempty"`
	PayoutStatusDescription *string           `json:"payoutStatusDescription,omitempty"`
	TransactionCount        *int32            `json:"transactionCount,omitempty"`
}
