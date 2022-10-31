package shared



type UpdateS3ResourcesResult struct {
    FailedS3Resources []FailedS3Resource `json:"failedS3Resources,omitempty"`
    
}

