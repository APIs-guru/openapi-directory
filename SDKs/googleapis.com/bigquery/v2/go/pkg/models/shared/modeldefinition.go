package shared

// ModelDefinitionModelOptions
// [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
type ModelDefinitionModelOptions struct {
	Labels    []string `json:"labels,omitempty"`
	LossType  *string  `json:"lossType,omitempty"`
	ModelType *string  `json:"modelType,omitempty"`
}

type ModelDefinition struct {
	ModelOptions *ModelDefinitionModelOptions `json:"modelOptions,omitempty"`
	TrainingRuns []BqmlTrainingRun            `json:"trainingRuns,omitempty"`
}
