package shared

// ContestPaymentDisputeRequest
// This type is used by the request payload of the contestPaymentDispute method.
type ContestPaymentDisputeRequest struct {
	ReturnAddress *ReturnAddress `json:"returnAddress,omitempty"`
	Revision      *int32         `json:"revision,omitempty"`
}
