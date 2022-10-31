package shared



type ProtocolExceptionInvocationResponse struct {
    Debug *string `json:"debug,omitempty"`
    Exception ProtocolException `json:"exception"`
    Method string `json:"method"`
    Metrics *ExecutionMetrics `json:"metrics,omitempty"`
    Result map[string]interface{} `json:"result"`
    
}

