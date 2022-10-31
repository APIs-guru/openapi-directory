package shared



type S3OutputLocation struct {
    OutputS3BucketName *string `json:"OutputS3BucketName,omitempty"`
    OutputS3KeyPrefix *string `json:"OutputS3KeyPrefix,omitempty"`
    OutputS3Region *string `json:"OutputS3Region,omitempty"`
    
}

