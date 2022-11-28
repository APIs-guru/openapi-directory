package shared

// UpdateEvidencePaymentDisputeRequest
// This type is used by the request payload of the updateEvidence method. The updateEvidence method is used to update an existing evidence set against a payment dispute with one or more evidence files.
type UpdateEvidencePaymentDisputeRequest struct {
	EvidenceID   *string          `json:"evidenceId,omitempty"`
	EvidenceType *string          `json:"evidenceType,omitempty"`
	Files        []FileEvidence   `json:"files,omitempty"`
	LineItems    []OrderLineItems `json:"lineItems,omitempty"`
}
