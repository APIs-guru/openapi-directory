package shared



type S3Location struct {
    Bucket *string `json:"bucket,omitempty"`
    KeyPrefix *string `json:"keyPrefix,omitempty"`
    
}

