package shared

type DetectionFilter struct {
	MinBoundingBoxHeight *float32 `json:"MinBoundingBoxHeight"`
	MinBoundingBoxWidth  *float32 `json:"MinBoundingBoxWidth"`
	MinConfidence        *float32 `json:"MinConfidence"`
}
