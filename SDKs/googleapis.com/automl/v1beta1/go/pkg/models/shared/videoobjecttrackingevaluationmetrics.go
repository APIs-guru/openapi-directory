package shared

type VideoObjectTrackingEvaluationMetrics struct {
	BoundingBoxMeanAveragePrecision *float32                  `json:"boundingBoxMeanAveragePrecision"`
	BoundingBoxMetricsEntries       []BoundingBoxMetricsEntry `json:"boundingBoxMetricsEntries"`
	EvaluatedBoundingBoxCount       *int32                    `json:"evaluatedBoundingBoxCount"`
	EvaluatedFrameCount             *int32                    `json:"evaluatedFrameCount"`
}
