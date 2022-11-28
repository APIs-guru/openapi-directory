package shared

// AutoMlJobCompletionCriteria
// How long a job is allowed to run, or how many candidates a job is allowed to generate.
type AutoMlJobCompletionCriteria struct {
	MaxAutoMlJobRuntimeInSeconds      *int64 `json:"MaxAutoMLJobRuntimeInSeconds,omitempty"`
	MaxCandidates                     *int64 `json:"MaxCandidates,omitempty"`
	MaxRuntimePerTrainingJobInSeconds *int64 `json:"MaxRuntimePerTrainingJobInSeconds,omitempty"`
}
