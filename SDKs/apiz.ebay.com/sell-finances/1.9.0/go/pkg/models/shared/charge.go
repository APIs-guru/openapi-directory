package shared



type Charge struct {
    CancellationID *string `json:"cancellationId,omitempty"`
    CaseID *string `json:"caseId,omitempty"`
    ChargeNetAmount *Amount `json:"chargeNetAmount,omitempty"`
    InquiryID *string `json:"inquiryId,omitempty"`
    OrderID *string `json:"orderId,omitempty"`
    PaymentDisputeID *string `json:"paymentDisputeId,omitempty"`
    RefundID *string `json:"refundId,omitempty"`
    ReturnID *string `json:"returnId,omitempty"`
    
}

