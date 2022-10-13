package shared

type AsyncInferenceConfig struct {
	ClientConfig *AsyncInferenceClientConfig `json:"ClientConfig"`
	OutputConfig AsyncInferenceOutputConfig  `json:"OutputConfig"`
}
