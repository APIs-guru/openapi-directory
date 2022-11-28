package shared

// PdfToTextResponse
// Response from an OCR to text operation.  Includes the confidence rating and converted text result.
type PdfToTextResponse struct {
	OcrPages   []OcrPageResult `json:"OcrPages,omitempty"`
	Successful *bool           `json:"Successful,omitempty"`
}
