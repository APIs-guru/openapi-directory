package shared

type PdfToLinesWithLocationResult struct {
	OcrPages   []OcrPageResultWithLinesWithLocation `json:"OcrPages"`
	Successful *bool                                `json:"Successful"`
}
