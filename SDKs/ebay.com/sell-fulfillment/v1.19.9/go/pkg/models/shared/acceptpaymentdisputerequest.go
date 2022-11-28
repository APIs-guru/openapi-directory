package shared

// AcceptPaymentDisputeRequest
// This type is used by base request of the acceptPaymentDispute method.
type AcceptPaymentDisputeRequest struct {
	ReturnAddress *ReturnAddress `json:"returnAddress,omitempty"`
	Revision      *int32         `json:"revision,omitempty"`
}
