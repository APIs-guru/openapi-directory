package shared

type PdfToWordsWithLocationResult struct {
	OcrPages   []OcrPageResultWithWordsWithLocation `json:"OcrPages"`
	Successful *bool                                `json:"Successful"`
}
