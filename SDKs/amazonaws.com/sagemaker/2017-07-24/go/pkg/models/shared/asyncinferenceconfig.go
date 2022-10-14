package shared

type AsyncInferenceConfig struct {
	ClientConfig *AsyncInferenceClientConfig `json:"ClientConfig,omitempty"`
	OutputConfig AsyncInferenceOutputConfig  `json:"OutputConfig"`
}
