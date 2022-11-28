package shared

// ImageToWordsWithLocationResult
// Result of an image to words-with-location OCR operation
type ImageToWordsWithLocationResult struct {
	Successful *bool            `json:"Successful,omitempty"`
	Words      []OcrWordElement `json:"Words,omitempty"`
}
