package shared

type ExecutionStartedEventDetails struct {
	Input        *string                           `json:"input"`
	InputDetails *HistoryEventExecutionDataDetails `json:"inputDetails"`
	RoleArn      *string                           `json:"roleArn"`
}
