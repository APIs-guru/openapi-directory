package shared



type S3ReferenceDataSource struct {
    BucketArn *string `json:"BucketARN,omitempty"`
    FileKey *string `json:"FileKey,omitempty"`
    
}

