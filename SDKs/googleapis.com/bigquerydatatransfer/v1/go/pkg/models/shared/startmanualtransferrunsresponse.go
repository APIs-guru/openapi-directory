package shared

// StartManualTransferRunsResponse
// A response to start manual transfer runs.
type StartManualTransferRunsResponse struct {
	Runs []TransferRun `json:"runs,omitempty"`
}
