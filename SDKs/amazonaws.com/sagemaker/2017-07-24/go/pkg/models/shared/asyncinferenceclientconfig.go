package shared

// AsyncInferenceClientConfig
// Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference.
type AsyncInferenceClientConfig struct {
	MaxConcurrentInvocationsPerInstance *int64 `json:"MaxConcurrentInvocationsPerInstance,omitempty"`
}
