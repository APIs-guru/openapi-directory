package shared



type ImageObjectDetectionEvaluationMetrics struct {
    BoundingBoxMeanAveragePrecision *float32 `json:"boundingBoxMeanAveragePrecision,omitempty"`
    BoundingBoxMetricsEntries []BoundingBoxMetricsEntry `json:"boundingBoxMetricsEntries,omitempty"`
    EvaluatedBoundingBoxCount *int32 `json:"evaluatedBoundingBoxCount,omitempty"`
    
}

