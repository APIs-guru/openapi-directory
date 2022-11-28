package shared

// OcrLineElement
// A contiguous line of text in an OCR document
type OcrLineElement struct {
	LineText *string          `json:"LineText,omitempty"`
	Words    []OcrWordElement `json:"Words,omitempty"`
}
