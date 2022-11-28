package shared

// DeleteUploadSharesRequest
// Request model for deleting Upload Shares
type DeleteUploadSharesRequest struct {
	ShareIds []int64 `json:"shareIds"`
}
