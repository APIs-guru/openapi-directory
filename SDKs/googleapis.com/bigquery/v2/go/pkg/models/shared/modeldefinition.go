package shared

type ModelDefinitionModelOptions struct {
	Labels    []string `json:"labels"`
	LossType  *string  `json:"lossType"`
	ModelType *string  `json:"modelType"`
}

type ModelDefinition struct {
	ModelOptions *ModelDefinitionModelOptions `json:"modelOptions"`
	TrainingRuns []BqmlTrainingRun            `json:"trainingRuns"`
}
