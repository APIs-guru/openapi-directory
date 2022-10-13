package shared

type BoundingBoxMetricsEntry struct {
	ConfidenceMetricsEntries []BoundingBoxMetricsEntryConfidenceMetricsEntry `json:"confidenceMetricsEntries"`
	IouThreshold             *float32                                        `json:"iouThreshold"`
	MeanAveragePrecision     *float32                                        `json:"meanAveragePrecision"`
}
