package shared

// WorkerConfigurationDescription
// The description of the worker configuration.
type WorkerConfigurationDescription struct {
	Revision               *int64  `json:"revision,omitempty"`
	WorkerConfigurationArn *string `json:"workerConfigurationArn,omitempty"`
}
