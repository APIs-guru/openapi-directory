package shared

type PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse struct {
	Debug   *string                `json:"debug,omitempty"`
	Method  string                 `json:"method"`
	Metrics *ExecutionMetrics      `json:"metrics,omitempty"`
	Result  map[string]interface{} `json:"result"`
}
