package shared

// CPUOptions
// The options for how a device's CPU is configured.
type CPUOptions struct {
	CoreCount      *int64 `json:"coreCount,omitempty"`
	ThreadsPerCore *int64 `json:"threadsPerCore,omitempty"`
}
