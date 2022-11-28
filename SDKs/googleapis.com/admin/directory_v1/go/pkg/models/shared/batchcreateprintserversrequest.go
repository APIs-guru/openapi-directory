package shared

// BatchCreatePrintServersRequestInput
// Request to add multiple new print servers in a batch.
type BatchCreatePrintServersRequestInput struct {
	Requests []CreatePrintServerRequestInput `json:"requests,omitempty"`
}
