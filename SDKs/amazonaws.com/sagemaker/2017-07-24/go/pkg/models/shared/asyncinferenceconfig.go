package shared

// AsyncInferenceConfig
// Specifies configuration for how an endpoint performs asynchronous inference.
type AsyncInferenceConfig struct {
	ClientConfig *AsyncInferenceClientConfig `json:"ClientConfig,omitempty"`
	OutputConfig AsyncInferenceOutputConfig  `json:"OutputConfig"`
}
