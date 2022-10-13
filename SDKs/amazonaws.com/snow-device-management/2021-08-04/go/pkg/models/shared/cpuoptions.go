package shared

type CPUOptions struct {
	CoreCount      *int64 `json:"coreCount"`
	ThreadsPerCore *int64 `json:"threadsPerCore"`
}
