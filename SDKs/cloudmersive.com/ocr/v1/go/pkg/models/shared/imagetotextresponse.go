package shared



type ImageToTextResponse struct {
    MeanConfidenceLevel *float32 `json:"MeanConfidenceLevel,omitempty"`
    TextResult *string `json:"TextResult,omitempty"`
    
}

