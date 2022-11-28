package shared

// DetectionFilter
// A set of parameters that allow you to filter out certain results from your returned results.
type DetectionFilter struct {
	MinBoundingBoxHeight *float32 `json:"MinBoundingBoxHeight,omitempty"`
	MinBoundingBoxWidth  *float32 `json:"MinBoundingBoxWidth,omitempty"`
	MinConfidence        *float32 `json:"MinConfidence,omitempty"`
}
