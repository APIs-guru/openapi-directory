package shared

// TaskGroupStatus
// Aggregated task status for a TaskGroup.
type TaskGroupStatus struct {
	Counts    map[string]string `json:"counts,omitempty"`
	Instances []InstanceStatus  `json:"instances,omitempty"`
}
