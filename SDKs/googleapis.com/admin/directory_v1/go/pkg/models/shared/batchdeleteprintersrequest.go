package shared

// BatchDeletePrintersRequest
// Request for deleting existing printers in batch.
type BatchDeletePrintersRequest struct {
	PrinterIds []string `json:"printerIds,omitempty"`
}
