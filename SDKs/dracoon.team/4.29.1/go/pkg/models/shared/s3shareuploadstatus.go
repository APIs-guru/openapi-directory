package shared

type S3ShareUploadStatus struct {
	ErrorDetails *ErrorResponse `json:"errorDetails,omitempty"`
	FileName     string         `json:"fileName"`
	Size         *int64         `json:"size,omitempty"`
	Status       string         `json:"status"`
}
