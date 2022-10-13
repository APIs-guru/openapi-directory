package shared

type PaymentDispute struct {
	Amount               *SimpleAmount                `json:"amount"`
	AvailableChoices     []string                     `json:"availableChoices"`
	BuyerProvided        *InfoFromBuyer               `json:"buyerProvided"`
	BuyerUsername        *string                      `json:"buyerUsername"`
	ClosedDate           *string                      `json:"closedDate"`
	Evidence             []DisputeEvidence            `json:"evidence"`
	EvidenceRequests     []EvidenceRequest            `json:"evidenceRequests"`
	LineItems            []OrderLineItems             `json:"lineItems"`
	MonetaryTransactions []MonetaryTransaction        `json:"monetaryTransactions"`
	OpenDate             *string                      `json:"openDate"`
	OrderID              *string                      `json:"orderId"`
	PaymentDisputeID     *string                      `json:"paymentDisputeId"`
	PaymentDisputeStatus *string                      `json:"paymentDisputeStatus"`
	Reason               *string                      `json:"reason"`
	Resolution           *PaymentDisputeOutcomeDetail `json:"resolution"`
	RespondByDate        *string                      `json:"respondByDate"`
	ReturnAddress        *ReturnAddress               `json:"returnAddress"`
	Revision             *int32                       `json:"revision"`
	SellerResponse       *string                      `json:"sellerResponse"`
}
