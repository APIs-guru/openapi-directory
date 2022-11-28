package shared

// StateEnteredEventDetails
// Contains details about a state entered during an execution.
type StateEnteredEventDetails struct {
	Input        *string                           `json:"input,omitempty"`
	InputDetails *HistoryEventExecutionDataDetails `json:"inputDetails,omitempty"`
	Name         string                            `json:"name"`
}
