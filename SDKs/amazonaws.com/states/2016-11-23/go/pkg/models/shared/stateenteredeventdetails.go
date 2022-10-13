package shared

type StateEnteredEventDetails struct {
	Input        *string                           `json:"input"`
	InputDetails *HistoryEventExecutionDataDetails `json:"inputDetails"`
	Name         string                            `json:"name"`
}
