package shared

type ContestPaymentDisputeRequest struct {
	ReturnAddress *ReturnAddress `json:"returnAddress"`
	Revision      *int32         `json:"revision"`
}
