package shared

type ProtocolExceptionInvocationResponse struct {
	Debug     *string                `json:"debug"`
	Exception ProtocolException      `json:"exception"`
	Method    string                 `json:"method"`
	Metrics   *ExecutionMetrics      `json:"metrics"`
	Result    map[string]interface{} `json:"result"`
}
