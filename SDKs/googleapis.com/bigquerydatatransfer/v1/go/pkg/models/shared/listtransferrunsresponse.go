package shared

// ListTransferRunsResponse
// The returned list of pipelines in the project.
type ListTransferRunsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	TransferRuns  []TransferRun `json:"transferRuns,omitempty"`
}
