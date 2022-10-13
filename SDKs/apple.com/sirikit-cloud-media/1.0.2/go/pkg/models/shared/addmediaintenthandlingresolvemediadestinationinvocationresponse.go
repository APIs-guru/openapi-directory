package shared

type AddMediaIntentHandlingResolveMediaDestinationInvocationResponse struct {
	Debug   *string                `json:"debug"`
	Method  string                 `json:"method"`
	Metrics *ExecutionMetrics      `json:"metrics"`
	Result  map[string]interface{} `json:"result"`
}
