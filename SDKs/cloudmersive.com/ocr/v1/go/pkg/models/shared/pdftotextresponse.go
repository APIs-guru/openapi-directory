package shared



type PdfToTextResponse struct {
    OcrPages []OcrPageResult `json:"OcrPages,omitempty"`
    Successful *bool `json:"Successful,omitempty"`
    
}

