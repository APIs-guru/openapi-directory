package shared

// PaymentDispute
// This type is used by the base response of the getPaymentDispute method. The getPaymentDispute method retrieves detailed information on a specific payment dispute.
type PaymentDispute struct {
	Amount               *SimpleAmount                `json:"amount,omitempty"`
	AvailableChoices     []string                     `json:"availableChoices,omitempty"`
	BuyerProvided        *InfoFromBuyer               `json:"buyerProvided,omitempty"`
	BuyerUsername        *string                      `json:"buyerUsername,omitempty"`
	ClosedDate           *string                      `json:"closedDate,omitempty"`
	Evidence             []DisputeEvidence            `json:"evidence,omitempty"`
	EvidenceRequests     []EvidenceRequest            `json:"evidenceRequests,omitempty"`
	LineItems            []OrderLineItems             `json:"lineItems,omitempty"`
	MonetaryTransactions []MonetaryTransaction        `json:"monetaryTransactions,omitempty"`
	OpenDate             *string                      `json:"openDate,omitempty"`
	OrderID              *string                      `json:"orderId,omitempty"`
	PaymentDisputeID     *string                      `json:"paymentDisputeId,omitempty"`
	PaymentDisputeStatus *string                      `json:"paymentDisputeStatus,omitempty"`
	Reason               *string                      `json:"reason,omitempty"`
	Resolution           *PaymentDisputeOutcomeDetail `json:"resolution,omitempty"`
	RespondByDate        *string                      `json:"respondByDate,omitempty"`
	ReturnAddress        *ReturnAddress               `json:"returnAddress,omitempty"`
	Revision             *int32                       `json:"revision,omitempty"`
	SellerResponse       *string                      `json:"sellerResponse,omitempty"`
}
