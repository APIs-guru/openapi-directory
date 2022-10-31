package shared



type UpdateEvidencePaymentDisputeRequest struct {
    EvidenceID *string `json:"evidenceId,omitempty"`
    EvidenceType *string `json:"evidenceType,omitempty"`
    Files []FileEvidence `json:"files,omitempty"`
    LineItems []OrderLineItems `json:"lineItems,omitempty"`
    
}

