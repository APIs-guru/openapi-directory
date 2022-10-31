package shared



type LoggingInfo struct {
    S3BucketName string `json:"S3BucketName"`
    S3KeyPrefix *string `json:"S3KeyPrefix,omitempty"`
    S3Region string `json:"S3Region"`
    
}

