package shared

// ModelClientConfig
// Configures the timeout and maximum number of retries for processing a transform job invocation.
type ModelClientConfig struct {
	InvocationsMaxRetries       *int64 `json:"InvocationsMaxRetries,omitempty"`
	InvocationsTimeoutInSeconds *int64 `json:"InvocationsTimeoutInSeconds,omitempty"`
}
