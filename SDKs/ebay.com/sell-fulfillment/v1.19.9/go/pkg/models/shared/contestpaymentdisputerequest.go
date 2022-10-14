package shared

type ContestPaymentDisputeRequest struct {
	ReturnAddress *ReturnAddress `json:"returnAddress,omitempty"`
	Revision      *int32         `json:"revision,omitempty"`
}
