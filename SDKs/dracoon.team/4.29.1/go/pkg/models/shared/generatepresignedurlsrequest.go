package shared

// GeneratePresignedUrlsRequest
// Request model for generating presigned URLs
type GeneratePresignedUrlsRequest struct {
	FirstPartNumber int32 `json:"firstPartNumber"`
	LastPartNumber  int32 `json:"lastPartNumber"`
	Size            int64 `json:"size"`
}
