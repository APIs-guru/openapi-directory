package shared

type ProtocolException struct {
	Code           *int64                      `json:"code"`
	MethodIndex    *int64                      `json:"methodIndex"`
	MethodName     *string                     `json:"methodName"`
	Reason         ProtocolExceptionReasonEnum `json:"reason"`
	RetryWithDelay *float32                    `json:"retryWithDelay"`
	Trace          []string                    `json:"trace"`
}
