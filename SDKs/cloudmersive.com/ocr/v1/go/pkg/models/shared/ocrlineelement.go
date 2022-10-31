package shared

type OcrLineElement struct {
	LineText *string          `json:"LineText,omitempty"`
	Words    []OcrWordElement `json:"Words,omitempty"`
}
