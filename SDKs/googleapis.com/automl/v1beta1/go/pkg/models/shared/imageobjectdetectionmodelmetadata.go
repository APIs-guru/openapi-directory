package shared

type ImageObjectDetectionModelMetadata struct {
	ModelType                 *string  `json:"modelType,omitempty"`
	NodeCount                 *string  `json:"nodeCount,omitempty"`
	NodeQPS                   *float64 `json:"nodeQps,omitempty"`
	StopReason                *string  `json:"stopReason,omitempty"`
	TrainBudgetMilliNodeHours *string  `json:"trainBudgetMilliNodeHours,omitempty"`
	TrainCostMilliNodeHours   *string  `json:"trainCostMilliNodeHours,omitempty"`
}
