package shared

// ScheduleTransferRunsResponse
// A response to schedule transfer runs for a time range.
type ScheduleTransferRunsResponse struct {
	Runs []TransferRun `json:"runs,omitempty"`
}
