package shared

type AddEvidencePaymentDisputeRequest struct {
	EvidenceType *string          `json:"evidenceType"`
	Files        []FileEvidence   `json:"files"`
	LineItems    []OrderLineItems `json:"lineItems"`
}
