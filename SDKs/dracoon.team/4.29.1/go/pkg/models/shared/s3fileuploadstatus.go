package shared

type S3FileUploadStatus struct {
	ErrorDetails *ErrorResponse `json:"errorDetails"`
	Node         *Node          `json:"node"`
	Status       string         `json:"status"`
}
