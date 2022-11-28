package shared

// ScheduleTransferRunsRequest
// A request to schedule transfer runs for a time range.
type ScheduleTransferRunsRequest struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
