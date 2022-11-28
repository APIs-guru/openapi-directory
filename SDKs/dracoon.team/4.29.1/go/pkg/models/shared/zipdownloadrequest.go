package shared

// ZipDownloadRequest
// Request model for ZIP download
type ZipDownloadRequest struct {
	NodeIds []int64 `json:"nodeIds"`
}
