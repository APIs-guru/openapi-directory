package shared

// BatchCreatePrintersResponse
// Response for adding new printers in batch.
type BatchCreatePrintersResponse struct {
	Failures []FailureInfo `json:"failures,omitempty"`
	Printers []Printer     `json:"printers,omitempty"`
}
