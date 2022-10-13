package shared

type PaymentDisputeSummary struct {
	Amount               *SimpleAmount `json:"amount"`
	BuyerUsername        *string       `json:"buyerUsername"`
	ClosedDate           *string       `json:"closedDate"`
	OpenDate             *string       `json:"openDate"`
	OrderID              *string       `json:"orderId"`
	PaymentDisputeID     *string       `json:"paymentDisputeId"`
	PaymentDisputeStatus *string       `json:"paymentDisputeStatus"`
	Reason               *string       `json:"reason"`
	RespondByDate        *string       `json:"respondByDate"`
}
