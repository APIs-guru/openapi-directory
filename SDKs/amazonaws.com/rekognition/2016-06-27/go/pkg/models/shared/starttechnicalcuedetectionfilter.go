package shared

type StartTechnicalCueDetectionFilter struct {
	BlackFrame           *BlackFrame `json:"BlackFrame"`
	MinSegmentConfidence *float32    `json:"MinSegmentConfidence"`
}
