package shared

// DeleteDownloadSharesRequest
// Request model for deleting Download Shares
type DeleteDownloadSharesRequest struct {
	ShareIds []int64 `json:"shareIds"`
}
