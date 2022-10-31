package shared



type S3Resource struct {
    BucketName string `json:"bucketName"`
    Prefix *string `json:"prefix,omitempty"`
    
}

