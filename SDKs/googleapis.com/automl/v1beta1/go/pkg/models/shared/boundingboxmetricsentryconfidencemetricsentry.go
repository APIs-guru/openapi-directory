package shared

// BoundingBoxMetricsEntryConfidenceMetricsEntry
// Metrics for a single confidence threshold.
type BoundingBoxMetricsEntryConfidenceMetricsEntry struct {
	ConfidenceThreshold *float32 `json:"confidenceThreshold,omitempty"`
	F1Score             *float32 `json:"f1Score,omitempty"`
	Precision           *float32 `json:"precision,omitempty"`
	Recall              *float32 `json:"recall,omitempty"`
}
