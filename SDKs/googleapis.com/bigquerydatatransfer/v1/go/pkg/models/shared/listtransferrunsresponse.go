package shared



type ListTransferRunsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TransferRuns []TransferRun `json:"transferRuns,omitempty"`
    
}

