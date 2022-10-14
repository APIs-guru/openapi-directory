package shared

type AcceptPaymentDisputeRequest struct {
	ReturnAddress *ReturnAddress `json:"returnAddress,omitempty"`
	Revision      *int32         `json:"revision,omitempty"`
}
