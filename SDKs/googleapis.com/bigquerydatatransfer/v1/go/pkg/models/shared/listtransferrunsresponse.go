package shared

type ListTransferRunsResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	TransferRuns  []TransferRun `json:"transferRuns"`
}
