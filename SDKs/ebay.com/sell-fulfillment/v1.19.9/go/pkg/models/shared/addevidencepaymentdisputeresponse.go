package shared

// AddEvidencePaymentDisputeResponse
// This type is used by the response payload of the addEvidence method. Its only field is an unique identifier of an evidence set.
type AddEvidencePaymentDisputeResponse struct {
	EvidenceID *string `json:"evidenceId,omitempty"`
}
