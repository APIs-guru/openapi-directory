package shared

type CreatePrinterRequest struct {
	Parent  *string  `json:"parent"`
	Printer *Printer `json:"printer"`
}
