package shared



type UploadSummary struct {
    FailureCount *int32 `json:"failureCount,omitempty"`
    SuccessCount *int32 `json:"successCount,omitempty"`
    
}

