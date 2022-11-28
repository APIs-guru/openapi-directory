package shared

// BatchDeletePrintersResponse
// Response for deleting existing printers in batch.
type BatchDeletePrintersResponse struct {
	FailedPrinters []FailureInfo `json:"failedPrinters,omitempty"`
	PrinterIds     []string      `json:"printerIds,omitempty"`
}
