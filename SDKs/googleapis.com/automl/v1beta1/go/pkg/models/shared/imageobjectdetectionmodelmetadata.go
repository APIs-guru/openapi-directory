package shared

type ImageObjectDetectionModelMetadata struct {
	ModelType                 *string  `json:"modelType"`
	NodeCount                 *string  `json:"nodeCount"`
	NodeQPS                   *float64 `json:"nodeQps"`
	StopReason                *string  `json:"stopReason"`
	TrainBudgetMilliNodeHours *string  `json:"trainBudgetMilliNodeHours"`
	TrainCostMilliNodeHours   *string  `json:"trainCostMilliNodeHours"`
}
