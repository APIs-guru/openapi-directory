package shared

type PdfToLinesWithLocationResult struct {
	OcrPages   []OcrPageResultWithLinesWithLocation `json:"OcrPages,omitempty"`
	Successful *bool                                `json:"Successful,omitempty"`
}
