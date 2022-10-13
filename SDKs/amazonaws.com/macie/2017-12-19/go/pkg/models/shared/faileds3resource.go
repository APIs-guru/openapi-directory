package shared

type FailedS3Resource struct {
	ErrorCode    *string     `json:"errorCode"`
	ErrorMessage *string     `json:"errorMessage"`
	FailedItem   *S3Resource `json:"failedItem"`
}
