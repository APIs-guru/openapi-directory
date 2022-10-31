package shared

type BatchDeletePrintersResponse struct {
	FailedPrinters []FailureInfo `json:"failedPrinters,omitempty"`
	PrinterIds     []string      `json:"printerIds,omitempty"`
}
