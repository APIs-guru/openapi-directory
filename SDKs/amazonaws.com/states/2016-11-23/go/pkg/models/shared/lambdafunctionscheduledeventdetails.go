package shared

type LambdaFunctionScheduledEventDetails struct {
	Input            *string                           `json:"input"`
	InputDetails     *HistoryEventExecutionDataDetails `json:"inputDetails"`
	Resource         string                            `json:"resource"`
	TimeoutInSeconds *int64                            `json:"timeoutInSeconds"`
}
