package shared

// Charge
// This type is used by the charge container, which is an array of one or more charges related to the transfer.
type Charge struct {
	CancellationID   *string `json:"cancellationId,omitempty"`
	CaseID           *string `json:"caseId,omitempty"`
	ChargeNetAmount  *Amount `json:"chargeNetAmount,omitempty"`
	InquiryID        *string `json:"inquiryId,omitempty"`
	OrderID          *string `json:"orderId,omitempty"`
	PaymentDisputeID *string `json:"paymentDisputeId,omitempty"`
	RefundID         *string `json:"refundId,omitempty"`
	ReturnID         *string `json:"returnId,omitempty"`
}
