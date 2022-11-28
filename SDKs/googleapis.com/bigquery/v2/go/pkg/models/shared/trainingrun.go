package shared

// TrainingRun
// Information about a single training query run for the model.
type TrainingRun struct {
	ClassLevelGlobalExplanations []GlobalExplanation `json:"classLevelGlobalExplanations,omitempty"`
	DataSplitResult              *DataSplitResult    `json:"dataSplitResult,omitempty"`
	EvaluationMetrics            *EvaluationMetrics  `json:"evaluationMetrics,omitempty"`
	ModelLevelGlobalExplanation  *GlobalExplanation  `json:"modelLevelGlobalExplanation,omitempty"`
	Results                      []IterationResult   `json:"results,omitempty"`
	StartTime                    *string             `json:"startTime,omitempty"`
	TrainingOptions              *TrainingOptions    `json:"trainingOptions,omitempty"`
	TrainingStartTime            *string             `json:"trainingStartTime,omitempty"`
	VertexAiModelID              *string             `json:"vertexAiModelId,omitempty"`
	VertexAiModelVersion         *string             `json:"vertexAiModelVersion,omitempty"`
}

// TrainingRunInput
// Information about a single training query run for the model.
type TrainingRunInput struct {
	DataSplitResult             *DataSplitResult   `json:"dataSplitResult,omitempty"`
	EvaluationMetrics           *EvaluationMetrics `json:"evaluationMetrics,omitempty"`
	ModelLevelGlobalExplanation *GlobalExplanation `json:"modelLevelGlobalExplanation,omitempty"`
	TrainingOptions             *TrainingOptions   `json:"trainingOptions,omitempty"`
	VertexAiModelID             *string            `json:"vertexAiModelId,omitempty"`
}
