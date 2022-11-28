package shared

// MonitoringStoppingCondition
// A time limit for how long the monitoring job is allowed to run before stopping.
type MonitoringStoppingCondition struct {
	MaxRuntimeInSeconds int64 `json:"MaxRuntimeInSeconds"`
}
