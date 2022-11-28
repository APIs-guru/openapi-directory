package shared

// BoundingBoxMetricsEntry
// Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.
type BoundingBoxMetricsEntry struct {
	ConfidenceMetricsEntries []BoundingBoxMetricsEntryConfidenceMetricsEntry `json:"confidenceMetricsEntries,omitempty"`
	IouThreshold             *float32                                        `json:"iouThreshold,omitempty"`
	MeanAveragePrecision     *float32                                        `json:"meanAveragePrecision,omitempty"`
}
