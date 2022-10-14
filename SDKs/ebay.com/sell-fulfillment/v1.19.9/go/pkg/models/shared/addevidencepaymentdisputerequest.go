package shared

type AddEvidencePaymentDisputeRequest struct {
	EvidenceType *string          `json:"evidenceType,omitempty"`
	Files        []FileEvidence   `json:"files,omitempty"`
	LineItems    []OrderLineItems `json:"lineItems,omitempty"`
}
