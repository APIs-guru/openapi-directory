package shared

// ImageObjectDetectionEvaluationMetrics
// Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.
type ImageObjectDetectionEvaluationMetrics struct {
	BoundingBoxMeanAveragePrecision *float32                  `json:"boundingBoxMeanAveragePrecision,omitempty"`
	BoundingBoxMetricsEntries       []BoundingBoxMetricsEntry `json:"boundingBoxMetricsEntries,omitempty"`
	EvaluatedBoundingBoxCount       *int32                    `json:"evaluatedBoundingBoxCount,omitempty"`
}
