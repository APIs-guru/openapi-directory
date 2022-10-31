package shared



type PhotoToWordsWithLocationResult struct {
    DiagnosticImage *string `json:"DiagnosticImage,omitempty"`
    Successful *bool `json:"Successful,omitempty"`
    TextElements []OcrPhotoTextElement `json:"TextElements,omitempty"`
    
}

