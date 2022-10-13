package shared

type AcceptPaymentDisputeRequest struct {
	ReturnAddress *ReturnAddress `json:"returnAddress"`
	Revision      *int32         `json:"revision"`
}
