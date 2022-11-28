package shared

// PhotoToWordsWithLocationResult
// Result of an photo to words-with-location OCR operation
type PhotoToWordsWithLocationResult struct {
	DiagnosticImage *string               `json:"DiagnosticImage,omitempty"`
	Successful      *bool                 `json:"Successful,omitempty"`
	TextElements    []OcrPhotoTextElement `json:"TextElements,omitempty"`
}
