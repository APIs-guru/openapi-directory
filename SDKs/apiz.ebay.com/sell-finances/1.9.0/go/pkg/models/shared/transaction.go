package shared

// Transaction
// This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account.
type Transaction struct {
	Amount               *Amount         `json:"amount,omitempty"`
	BookingEntry         *string         `json:"bookingEntry,omitempty"`
	Buyer                *Buyer          `json:"buyer,omitempty"`
	FeeType              *string         `json:"feeType,omitempty"`
	OrderID              *string         `json:"orderId,omitempty"`
	OrderLineItems       []OrderLineItem `json:"orderLineItems,omitempty"`
	PaymentsEntity       *string         `json:"paymentsEntity,omitempty"`
	PayoutID             *string         `json:"payoutId,omitempty"`
	References           []Reference     `json:"references,omitempty"`
	SalesRecordReference *string         `json:"salesRecordReference,omitempty"`
	TotalFeeAmount       *Amount         `json:"totalFeeAmount,omitempty"`
	TotalFeeBasisAmount  *Amount         `json:"totalFeeBasisAmount,omitempty"`
	TransactionDate      *string         `json:"transactionDate,omitempty"`
	TransactionID        *string         `json:"transactionId,omitempty"`
	TransactionMemo      *string         `json:"transactionMemo,omitempty"`
	TransactionStatus    *string         `json:"transactionStatus,omitempty"`
	TransactionType      *string         `json:"transactionType,omitempty"`
}
