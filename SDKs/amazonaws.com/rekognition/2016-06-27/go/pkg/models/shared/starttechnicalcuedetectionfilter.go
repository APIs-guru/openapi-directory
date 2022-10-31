package shared



type StartTechnicalCueDetectionFilter struct {
    BlackFrame *BlackFrame `json:"BlackFrame,omitempty"`
    MinSegmentConfidence *float32 `json:"MinSegmentConfidence,omitempty"`
    
}

