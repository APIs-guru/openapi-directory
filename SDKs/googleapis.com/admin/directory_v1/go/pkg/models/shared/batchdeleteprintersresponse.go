package shared

type BatchDeletePrintersResponse struct {
	FailedPrinters []FailureInfo `json:"failedPrinters"`
	PrinterIds     []string      `json:"printerIds"`
}
