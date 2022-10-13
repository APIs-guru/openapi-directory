package shared

type TrainingRun struct {
	ClassLevelGlobalExplanations []GlobalExplanation `json:"classLevelGlobalExplanations"`
	DataSplitResult              *DataSplitResult    `json:"dataSplitResult"`
	EvaluationMetrics            *EvaluationMetrics  `json:"evaluationMetrics"`
	ModelLevelGlobalExplanation  *GlobalExplanation  `json:"modelLevelGlobalExplanation"`
	Results                      []IterationResult   `json:"results"`
	StartTime                    *string             `json:"startTime"`
	TrainingOptions              *TrainingOptions    `json:"trainingOptions"`
	TrainingStartTime            *string             `json:"trainingStartTime"`
	VertexAiModelID              *string             `json:"vertexAiModelId"`
	VertexAiModelVersion         *string             `json:"vertexAiModelVersion"`
}
