package shared

type StoppingCondition struct {
	MaxRuntimeInSeconds  *int64 `json:"MaxRuntimeInSeconds"`
	MaxWaitTimeInSeconds *int64 `json:"MaxWaitTimeInSeconds"`
}
