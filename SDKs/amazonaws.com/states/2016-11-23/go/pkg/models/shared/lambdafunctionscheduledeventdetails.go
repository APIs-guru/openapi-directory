package shared

type LambdaFunctionScheduledEventDetails struct {
	Input            *string                           `json:"input,omitempty"`
	InputDetails     *HistoryEventExecutionDataDetails `json:"inputDetails,omitempty"`
	Resource         string                            `json:"resource"`
	TimeoutInSeconds *int64                            `json:"timeoutInSeconds,omitempty"`
}
