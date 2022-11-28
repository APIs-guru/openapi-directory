package shared

// TaskScheduledEventDetails
// Contains details about a task scheduled during an execution.
type TaskScheduledEventDetails struct {
	HeartbeatInSeconds *int64 `json:"heartbeatInSeconds,omitempty"`
	Parameters         string `json:"parameters"`
	Region             string `json:"region"`
	Resource           string `json:"resource"`
	ResourceType       string `json:"resourceType"`
	TimeoutInSeconds   *int64 `json:"timeoutInSeconds,omitempty"`
}
