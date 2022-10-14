package shared

type CreatePrinterRequest struct {
	Parent  *string  `json:"parent,omitempty"`
	Printer *Printer `json:"printer,omitempty"`
}
