package shared

type ListPrinterModelsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	PrinterModels []PrinterModel `json:"printerModels"`
}
