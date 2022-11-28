package shared

// StartManualTransferRunsRequest
// A request to start manual transfer runs.
type StartManualTransferRunsRequest struct {
	RequestedRunTime   *string    `json:"requestedRunTime,omitempty"`
	RequestedTimeRange *TimeRange `json:"requestedTimeRange,omitempty"`
}
