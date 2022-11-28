package shared

// BatchCreatePrintersRequestInput
// Request for adding new printers in batch.
type BatchCreatePrintersRequestInput struct {
	Requests []CreatePrinterRequestInput `json:"requests,omitempty"`
}
