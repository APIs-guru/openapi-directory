package shared

// VideoObjectTrackingEvaluationMetrics
// Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).
type VideoObjectTrackingEvaluationMetrics struct {
	BoundingBoxMeanAveragePrecision *float32                  `json:"boundingBoxMeanAveragePrecision,omitempty"`
	BoundingBoxMetricsEntries       []BoundingBoxMetricsEntry `json:"boundingBoxMetricsEntries,omitempty"`
	EvaluatedBoundingBoxCount       *int32                    `json:"evaluatedBoundingBoxCount,omitempty"`
	EvaluatedFrameCount             *int32                    `json:"evaluatedFrameCount,omitempty"`
}
