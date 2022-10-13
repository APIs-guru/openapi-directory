package shared

type Charge struct {
	CancellationID   *string `json:"cancellationId"`
	CaseID           *string `json:"caseId"`
	ChargeNetAmount  *Amount `json:"chargeNetAmount"`
	InquiryID        *string `json:"inquiryId"`
	OrderID          *string `json:"orderId"`
	PaymentDisputeID *string `json:"paymentDisputeId"`
	RefundID         *string `json:"refundId"`
	ReturnID         *string `json:"returnId"`
}
