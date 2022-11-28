package shared

// ImageToLinesWithLocationResult
// Result of an image to lines-with-location OCR operation
type ImageToLinesWithLocationResult struct {
	Lines      []OcrLineElement `json:"Lines,omitempty"`
	Successful *bool            `json:"Successful,omitempty"`
}
