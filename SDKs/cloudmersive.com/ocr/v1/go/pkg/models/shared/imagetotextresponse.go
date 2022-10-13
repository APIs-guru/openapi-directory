package shared

type ImageToTextResponse struct {
	MeanConfidenceLevel *float32 `json:"MeanConfidenceLevel"`
	TextResult          *string  `json:"TextResult"`
}
