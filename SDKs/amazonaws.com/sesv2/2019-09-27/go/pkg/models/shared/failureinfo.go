package shared

type FailureInfo struct {
	ErrorMessage       *string `json:"ErrorMessage,omitempty"`
	FailedRecordsS3URL *string `json:"FailedRecordsS3Url,omitempty"`
}
