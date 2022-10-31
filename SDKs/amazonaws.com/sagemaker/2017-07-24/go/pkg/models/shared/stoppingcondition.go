package shared

type StoppingCondition struct {
	MaxRuntimeInSeconds  *int64 `json:"MaxRuntimeInSeconds,omitempty"`
	MaxWaitTimeInSeconds *int64 `json:"MaxWaitTimeInSeconds,omitempty"`
}
