package shared

type ImageClassificationModelMetadata struct {
	BaseModelID *string  `json:"baseModelId"`
	ModelType   *string  `json:"modelType"`
	NodeCount   *string  `json:"nodeCount"`
	NodeQPS     *float64 `json:"nodeQps"`
	StopReason  *string  `json:"stopReason"`
	TrainBudget *string  `json:"trainBudget"`
	TrainCost   *string  `json:"trainCost"`
}
