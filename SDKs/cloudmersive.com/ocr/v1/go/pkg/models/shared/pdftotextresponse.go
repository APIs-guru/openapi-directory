package shared

type PdfToTextResponse struct {
	OcrPages   []OcrPageResult `json:"OcrPages"`
	Successful *bool           `json:"Successful"`
}
