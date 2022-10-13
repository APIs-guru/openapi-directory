package shared

type BatchCreatePrintersResponse struct {
	Failures []FailureInfo `json:"failures"`
	Printers []Printer     `json:"printers"`
}
