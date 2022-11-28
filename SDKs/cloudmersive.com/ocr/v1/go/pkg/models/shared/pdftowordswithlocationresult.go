package shared

// PdfToWordsWithLocationResult
// Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.
type PdfToWordsWithLocationResult struct {
	OcrPages   []OcrPageResultWithWordsWithLocation `json:"OcrPages,omitempty"`
	Successful *bool                                `json:"Successful,omitempty"`
}
