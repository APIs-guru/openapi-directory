package shared

// StartShotDetectionFilter
// Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>.
type StartShotDetectionFilter struct {
	MinSegmentConfidence *float32 `json:"MinSegmentConfidence,omitempty"`
}
