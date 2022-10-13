package shared

type TaskScheduledEventDetails struct {
	HeartbeatInSeconds *int64 `json:"heartbeatInSeconds"`
	Parameters         string `json:"parameters"`
	Region             string `json:"region"`
	Resource           string `json:"resource"`
	ResourceType       string `json:"resourceType"`
	TimeoutInSeconds   *int64 `json:"timeoutInSeconds"`
}
