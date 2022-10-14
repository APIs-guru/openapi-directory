package shared

type OcrWordElement struct {
	BlockNumber     *int32   `json:"BlockNumber,omitempty"`
	ConfidenceLevel *float64 `json:"ConfidenceLevel,omitempty"`
	Height          *int32   `json:"Height,omitempty"`
	LineNumber      *int32   `json:"LineNumber,omitempty"`
	PageNumber      *int32   `json:"PageNumber,omitempty"`
	ParagraphNumber *int32   `json:"ParagraphNumber,omitempty"`
	Width           *int32   `json:"Width,omitempty"`
	WordNumber      *int32   `json:"WordNumber,omitempty"`
	WordText        *string  `json:"WordText,omitempty"`
	XLeft           *int32   `json:"XLeft,omitempty"`
	YTop            *int32   `json:"YTop,omitempty"`
}
