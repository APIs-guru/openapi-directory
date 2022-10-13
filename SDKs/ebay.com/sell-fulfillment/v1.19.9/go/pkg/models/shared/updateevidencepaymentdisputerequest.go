package shared

type UpdateEvidencePaymentDisputeRequest struct {
	EvidenceID   *string          `json:"evidenceId"`
	EvidenceType *string          `json:"evidenceType"`
	Files        []FileEvidence   `json:"files"`
	LineItems    []OrderLineItems `json:"lineItems"`
}
