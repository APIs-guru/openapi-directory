package shared

type FailureInfo struct {
	ErrorMessage       *string `json:"ErrorMessage"`
	FailedRecordsS3URL *string `json:"FailedRecordsS3Url"`
}
