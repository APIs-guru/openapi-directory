package shared

type UploadSummary struct {
	FailureCount *int32 `json:"failureCount"`
	SuccessCount *int32 `json:"successCount"`
}
