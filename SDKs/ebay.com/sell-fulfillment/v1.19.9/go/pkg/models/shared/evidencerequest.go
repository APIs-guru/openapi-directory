package shared

type EvidenceRequest struct {
	EvidenceID    *string          `json:"evidenceId"`
	EvidenceType  *string          `json:"evidenceType"`
	LineItems     []OrderLineItems `json:"lineItems"`
	RequestDate   *string          `json:"requestDate"`
	RespondByDate *string          `json:"respondByDate"`
}
