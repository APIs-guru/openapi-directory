package shared

type PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse struct {
	Debug   *string                `json:"debug"`
	Method  string                 `json:"method"`
	Metrics *ExecutionMetrics      `json:"metrics"`
	Result  map[string]interface{} `json:"result"`
}
