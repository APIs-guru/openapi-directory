package shared

type OcrPageResult struct {
	MeanConfidenceLevel *float32 `json:"MeanConfidenceLevel,omitempty"`
	PageNumber          *int32   `json:"PageNumber,omitempty"`
	TextResult          *string  `json:"TextResult,omitempty"`
}
