package shared

// ListPrinterModelsResponse
// Response for listing allowed printer models.
type ListPrinterModelsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	PrinterModels []PrinterModel `json:"printerModels,omitempty"`
}
