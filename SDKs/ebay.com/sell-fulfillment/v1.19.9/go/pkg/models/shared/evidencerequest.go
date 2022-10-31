package shared



type EvidenceRequest struct {
    EvidenceID *string `json:"evidenceId,omitempty"`
    EvidenceType *string `json:"evidenceType,omitempty"`
    LineItems []OrderLineItems `json:"lineItems,omitempty"`
    RequestDate *string `json:"requestDate,omitempty"`
    RespondByDate *string `json:"respondByDate,omitempty"`
    
}

