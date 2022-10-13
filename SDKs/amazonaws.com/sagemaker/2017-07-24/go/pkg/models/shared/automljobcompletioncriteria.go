package shared

type AutoMlJobCompletionCriteria struct {
	MaxAutoMlJobRuntimeInSeconds      *int64 `json:"MaxAutoMLJobRuntimeInSeconds"`
	MaxCandidates                     *int64 `json:"MaxCandidates"`
	MaxRuntimePerTrainingJobInSeconds *int64 `json:"MaxRuntimePerTrainingJobInSeconds"`
}
