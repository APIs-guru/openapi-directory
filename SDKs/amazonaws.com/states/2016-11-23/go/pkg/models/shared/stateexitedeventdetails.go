package shared

// StateExitedEventDetails
// Contains details about an exit from a state during an execution.
type StateExitedEventDetails struct {
	Name          string                            `json:"name"`
	Output        *string                           `json:"output,omitempty"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
}
