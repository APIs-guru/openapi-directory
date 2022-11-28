package shared

// ProcessingStoppingCondition
// Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
type ProcessingStoppingCondition struct {
	MaxRuntimeInSeconds int64 `json:"MaxRuntimeInSeconds"`
}
