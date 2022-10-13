package shared

type OcrLineElement struct {
	LineText *string          `json:"LineText"`
	Words    []OcrWordElement `json:"Words"`
}
