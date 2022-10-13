package shared

type BatchCreatePrintersRequest struct {
	Requests []CreatePrinterRequest `json:"requests"`
}
