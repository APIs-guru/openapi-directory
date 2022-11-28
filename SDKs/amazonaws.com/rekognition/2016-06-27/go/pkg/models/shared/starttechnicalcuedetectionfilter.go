package shared

// StartTechnicalCueDetectionFilter
// Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.
type StartTechnicalCueDetectionFilter struct {
	BlackFrame           *BlackFrame `json:"BlackFrame,omitempty"`
	MinSegmentConfidence *float32    `json:"MinSegmentConfidence,omitempty"`
}
