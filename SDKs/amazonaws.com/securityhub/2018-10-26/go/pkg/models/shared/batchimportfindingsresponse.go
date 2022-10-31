package shared



type BatchImportFindingsResponse struct {
    FailedCount int64 `json:"FailedCount"`
    FailedFindings []ImportFindingsError `json:"FailedFindings,omitempty"`
    SuccessCount int64 `json:"SuccessCount"`
    
}

