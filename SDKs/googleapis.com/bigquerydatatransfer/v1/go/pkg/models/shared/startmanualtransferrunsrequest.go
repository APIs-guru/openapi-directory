package shared

type StartManualTransferRunsRequest struct {
	RequestedRunTime   *string    `json:"requestedRunTime,omitempty"`
	RequestedTimeRange *TimeRange `json:"requestedTimeRange,omitempty"`
}
