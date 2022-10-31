package shared



type VideoObjectTrackingEvaluationMetrics struct {
    BoundingBoxMeanAveragePrecision *float32 `json:"boundingBoxMeanAveragePrecision,omitempty"`
    BoundingBoxMetricsEntries []BoundingBoxMetricsEntry `json:"boundingBoxMetricsEntries,omitempty"`
    EvaluatedBoundingBoxCount *int32 `json:"evaluatedBoundingBoxCount,omitempty"`
    EvaluatedFrameCount *int32 `json:"evaluatedFrameCount,omitempty"`
    
}

