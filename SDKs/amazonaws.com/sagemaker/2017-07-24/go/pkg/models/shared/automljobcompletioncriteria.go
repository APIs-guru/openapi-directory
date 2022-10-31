package shared

type AutoMlJobCompletionCriteria struct {
	MaxAutoMlJobRuntimeInSeconds      *int64 `json:"MaxAutoMLJobRuntimeInSeconds,omitempty"`
	MaxCandidates                     *int64 `json:"MaxCandidates,omitempty"`
	MaxRuntimePerTrainingJobInSeconds *int64 `json:"MaxRuntimePerTrainingJobInSeconds,omitempty"`
}
