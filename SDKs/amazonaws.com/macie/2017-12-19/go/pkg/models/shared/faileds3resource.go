package shared

// FailedS3Resource
// Includes details about the failed S3 resources.
type FailedS3Resource struct {
	ErrorCode    *string     `json:"errorCode,omitempty"`
	ErrorMessage *string     `json:"errorMessage,omitempty"`
	FailedItem   *S3Resource `json:"failedItem,omitempty"`
}
