package shared

type ImageObjectDetectionEvaluationMetrics struct {
	BoundingBoxMeanAveragePrecision *float32                  `json:"boundingBoxMeanAveragePrecision"`
	BoundingBoxMetricsEntries       []BoundingBoxMetricsEntry `json:"boundingBoxMetricsEntries"`
	EvaluatedBoundingBoxCount       *int32                    `json:"evaluatedBoundingBoxCount"`
}
