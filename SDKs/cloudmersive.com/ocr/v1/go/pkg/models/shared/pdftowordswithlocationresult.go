package shared



type PdfToWordsWithLocationResult struct {
    OcrPages []OcrPageResultWithWordsWithLocation `json:"OcrPages,omitempty"`
    Successful *bool `json:"Successful,omitempty"`
    
}

