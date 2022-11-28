package shared

// UploadSummary
// This container provides summary information on an upload feed (not applicable for download feed types).
type UploadSummary struct {
	FailureCount *int32 `json:"failureCount,omitempty"`
	SuccessCount *int32 `json:"successCount,omitempty"`
}
