package shared

// FailureInfo
// An object that contains the failure details about an import job.
type FailureInfo struct {
	ErrorMessage       *string `json:"ErrorMessage,omitempty"`
	FailedRecordsS3URL *string `json:"FailedRecordsS3Url,omitempty"`
}
