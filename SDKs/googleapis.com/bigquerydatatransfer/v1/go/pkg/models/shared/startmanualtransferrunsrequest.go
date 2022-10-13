package shared

type StartManualTransferRunsRequest struct {
	RequestedRunTime   *string    `json:"requestedRunTime"`
	RequestedTimeRange *TimeRange `json:"requestedTimeRange"`
}
