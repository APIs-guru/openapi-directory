package shared

type OcrWordElement struct {
	BlockNumber     *int32   `json:"BlockNumber"`
	ConfidenceLevel *float64 `json:"ConfidenceLevel"`
	Height          *int32   `json:"Height"`
	LineNumber      *int32   `json:"LineNumber"`
	PageNumber      *int32   `json:"PageNumber"`
	ParagraphNumber *int32   `json:"ParagraphNumber"`
	Width           *int32   `json:"Width"`
	WordNumber      *int32   `json:"WordNumber"`
	WordText        *string  `json:"WordText"`
	XLeft           *int32   `json:"XLeft"`
	YTop            *int32   `json:"YTop"`
}
