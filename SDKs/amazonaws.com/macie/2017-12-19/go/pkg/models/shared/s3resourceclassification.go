package shared



type S3ResourceClassification struct {
    BucketName string `json:"bucketName"`
    ClassificationType ClassificationType `json:"classificationType"`
    Prefix *string `json:"prefix,omitempty"`
    
}

