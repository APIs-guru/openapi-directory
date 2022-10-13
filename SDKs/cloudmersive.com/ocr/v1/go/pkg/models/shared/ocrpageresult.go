package shared

type OcrPageResult struct {
	MeanConfidenceLevel *float32 `json:"MeanConfidenceLevel"`
	PageNumber          *int32   `json:"PageNumber"`
	TextResult          *string  `json:"TextResult"`
}
