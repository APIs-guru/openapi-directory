package shared

type DetectionFilter struct {
	MinBoundingBoxHeight *float32 `json:"MinBoundingBoxHeight,omitempty"`
	MinBoundingBoxWidth  *float32 `json:"MinBoundingBoxWidth,omitempty"`
	MinConfidence        *float32 `json:"MinConfidence,omitempty"`
}
