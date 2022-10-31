package shared

type StateEnteredEventDetails struct {
	Input        *string                           `json:"input,omitempty"`
	InputDetails *HistoryEventExecutionDataDetails `json:"inputDetails,omitempty"`
	Name         string                            `json:"name"`
}
