package shared

type ImageClassificationModelMetadata struct {
	BaseModelID *string  `json:"baseModelId,omitempty"`
	ModelType   *string  `json:"modelType,omitempty"`
	NodeCount   *string  `json:"nodeCount,omitempty"`
	NodeQPS     *float64 `json:"nodeQps,omitempty"`
	StopReason  *string  `json:"stopReason,omitempty"`
	TrainBudget *string  `json:"trainBudget,omitempty"`
	TrainCost   *string  `json:"trainCost,omitempty"`
}
