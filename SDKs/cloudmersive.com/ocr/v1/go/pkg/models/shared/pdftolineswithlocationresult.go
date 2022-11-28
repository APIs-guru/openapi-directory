package shared

// PdfToLinesWithLocationResult
// Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
type PdfToLinesWithLocationResult struct {
	OcrPages   []OcrPageResultWithLinesWithLocation `json:"OcrPages,omitempty"`
	Successful *bool                                `json:"Successful,omitempty"`
}
