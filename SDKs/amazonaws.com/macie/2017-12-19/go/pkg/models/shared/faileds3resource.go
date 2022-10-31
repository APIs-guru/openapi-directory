package shared



type FailedS3Resource struct {
    ErrorCode *string `json:"errorCode,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    FailedItem *S3Resource `json:"failedItem,omitempty"`
    
}

