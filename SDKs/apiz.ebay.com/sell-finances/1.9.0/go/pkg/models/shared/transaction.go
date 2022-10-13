package shared

type Transaction struct {
	Amount               *Amount         `json:"amount"`
	BookingEntry         *string         `json:"bookingEntry"`
	Buyer                *Buyer          `json:"buyer"`
	FeeType              *string         `json:"feeType"`
	OrderID              *string         `json:"orderId"`
	OrderLineItems       []OrderLineItem `json:"orderLineItems"`
	PaymentsEntity       *string         `json:"paymentsEntity"`
	PayoutID             *string         `json:"payoutId"`
	References           []Reference     `json:"references"`
	SalesRecordReference *string         `json:"salesRecordReference"`
	TotalFeeAmount       *Amount         `json:"totalFeeAmount"`
	TotalFeeBasisAmount  *Amount         `json:"totalFeeBasisAmount"`
	TransactionDate      *string         `json:"transactionDate"`
	TransactionID        *string         `json:"transactionId"`
	TransactionMemo      *string         `json:"transactionMemo"`
	TransactionStatus    *string         `json:"transactionStatus"`
	TransactionType      *string         `json:"transactionType"`
}
