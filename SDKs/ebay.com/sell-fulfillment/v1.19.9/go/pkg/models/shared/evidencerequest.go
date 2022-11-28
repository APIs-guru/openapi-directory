package shared

// EvidenceRequest
// This type is used by the evidenceRequests array that is returned in the getPaymentDispute response if one or more evidential documents are being requested to help resolve the payment dispute.
type EvidenceRequest struct {
	EvidenceID    *string          `json:"evidenceId,omitempty"`
	EvidenceType  *string          `json:"evidenceType,omitempty"`
	LineItems     []OrderLineItems `json:"lineItems,omitempty"`
	RequestDate   *string          `json:"requestDate,omitempty"`
	RespondByDate *string          `json:"respondByDate,omitempty"`
}
