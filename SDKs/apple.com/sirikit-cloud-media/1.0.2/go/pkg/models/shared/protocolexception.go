package shared



type ProtocolException struct {
    Code *int64 `json:"code,omitempty"`
    MethodIndex *int64 `json:"methodIndex,omitempty"`
    MethodName *string `json:"methodName,omitempty"`
    Reason ProtocolExceptionReasonEnum `json:"reason"`
    RetryWithDelay *float32 `json:"retryWithDelay,omitempty"`
    Trace []string `json:"trace,omitempty"`
    
}

