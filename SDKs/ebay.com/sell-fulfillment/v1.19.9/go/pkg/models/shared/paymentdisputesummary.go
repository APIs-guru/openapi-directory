package shared

// PaymentDisputeSummary
// This type is used by each payment dispute that is returned with the getPaymentDisputeSummaries method.
type PaymentDisputeSummary struct {
	Amount               *SimpleAmount `json:"amount,omitempty"`
	BuyerUsername        *string       `json:"buyerUsername,omitempty"`
	ClosedDate           *string       `json:"closedDate,omitempty"`
	OpenDate             *string       `json:"openDate,omitempty"`
	OrderID              *string       `json:"orderId,omitempty"`
	PaymentDisputeID     *string       `json:"paymentDisputeId,omitempty"`
	PaymentDisputeStatus *string       `json:"paymentDisputeStatus,omitempty"`
	Reason               *string       `json:"reason,omitempty"`
	RespondByDate        *string       `json:"respondByDate,omitempty"`
}
