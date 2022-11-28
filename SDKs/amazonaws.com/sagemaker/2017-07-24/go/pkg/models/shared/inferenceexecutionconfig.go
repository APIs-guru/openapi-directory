package shared

// InferenceExecutionConfig
// Specifies details about how containers in a multi-container endpoint are run.
type InferenceExecutionConfig struct {
	Mode InferenceExecutionModeEnum `json:"Mode"`
}
