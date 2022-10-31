package shared



type DisputeEvidence struct {
    EvidenceID *string `json:"evidenceId,omitempty"`
    EvidenceType *string `json:"evidenceType,omitempty"`
    Files []FileInfo `json:"files,omitempty"`
    LineItems []OrderLineItems `json:"lineItems,omitempty"`
    ProvidedDate *string `json:"providedDate,omitempty"`
    RequestDate *string `json:"requestDate,omitempty"`
    RespondByDate *string `json:"respondByDate,omitempty"`
    ShipmentTracking []TrackingInfo `json:"shipmentTracking,omitempty"`
    
}

