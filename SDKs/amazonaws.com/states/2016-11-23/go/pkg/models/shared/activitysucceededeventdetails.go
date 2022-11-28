package shared

// ActivitySucceededEventDetails
// Contains details about an activity that successfully terminated during an execution.
type ActivitySucceededEventDetails struct {
	Output        *string                           `json:"output,omitempty"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
}
