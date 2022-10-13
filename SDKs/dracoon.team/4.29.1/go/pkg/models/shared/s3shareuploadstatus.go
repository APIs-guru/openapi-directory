package shared

type S3ShareUploadStatus struct {
	ErrorDetails *ErrorResponse `json:"errorDetails"`
	FileName     string         `json:"fileName"`
	Size         *int64         `json:"size"`
	Status       string         `json:"status"`
}
