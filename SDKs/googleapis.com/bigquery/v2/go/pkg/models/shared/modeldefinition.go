package shared



type ModelDefinitionModelOptions struct {
    Labels []string `json:"labels,omitempty"`
    LossType *string `json:"lossType,omitempty"`
    ModelType *string `json:"modelType,omitempty"`
    
}

type ModelDefinition struct {
    ModelOptions *ModelDefinitionModelOptions `json:"modelOptions,omitempty"`
    TrainingRuns []BqmlTrainingRun `json:"trainingRuns,omitempty"`
    
}

