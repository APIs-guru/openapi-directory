package shared

type BoundingBoxMetricsEntry struct {
	ConfidenceMetricsEntries []BoundingBoxMetricsEntryConfidenceMetricsEntry `json:"confidenceMetricsEntries,omitempty"`
	IouThreshold             *float32                                        `json:"iouThreshold,omitempty"`
	MeanAveragePrecision     *float32                                        `json:"meanAveragePrecision,omitempty"`
}
