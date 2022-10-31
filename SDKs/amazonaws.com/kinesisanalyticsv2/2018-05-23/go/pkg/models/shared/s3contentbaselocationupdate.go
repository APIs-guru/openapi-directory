package shared



type S3ContentBaseLocationUpdate struct {
    BasePathUpdate *string `json:"BasePathUpdate,omitempty"`
    BucketArnUpdate string `json:"BucketARNUpdate"`
    
}

