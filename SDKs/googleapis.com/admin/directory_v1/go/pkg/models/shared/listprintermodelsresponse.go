package shared



type ListPrinterModelsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PrinterModels []PrinterModel `json:"printerModels,omitempty"`
    
}

