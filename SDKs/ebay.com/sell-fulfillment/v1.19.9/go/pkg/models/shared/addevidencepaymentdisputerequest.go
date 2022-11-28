package shared

// AddEvidencePaymentDisputeRequest
// This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
type AddEvidencePaymentDisputeRequest struct {
	EvidenceType *string          `json:"evidenceType,omitempty"`
	Files        []FileEvidence   `json:"files,omitempty"`
	LineItems    []OrderLineItems `json:"lineItems,omitempty"`
}
