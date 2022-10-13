package shared

type DisputeEvidence struct {
	EvidenceID       *string          `json:"evidenceId"`
	EvidenceType     *string          `json:"evidenceType"`
	Files            []FileInfo       `json:"files"`
	LineItems        []OrderLineItems `json:"lineItems"`
	ProvidedDate     *string          `json:"providedDate"`
	RequestDate      *string          `json:"requestDate"`
	RespondByDate    *string          `json:"respondByDate"`
	ShipmentTracking []TrackingInfo   `json:"shipmentTracking"`
}
