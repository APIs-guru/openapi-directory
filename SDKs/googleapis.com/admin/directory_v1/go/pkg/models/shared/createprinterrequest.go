package shared

// CreatePrinterRequestInput
// Request for adding a new printer.
type CreatePrinterRequestInput struct {
	Parent  *string       `json:"parent,omitempty"`
	Printer *PrinterInput `json:"printer,omitempty"`
}
