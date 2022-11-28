package shared

// S3FileUploadStatus
// S3 file upload status information
type S3FileUploadStatus struct {
	ErrorDetails *ErrorResponse `json:"errorDetails,omitempty"`
	Node         *Node          `json:"node,omitempty"`
	Status       string         `json:"status"`
}
