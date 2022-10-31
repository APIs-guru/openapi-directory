package shared



type S3LocationDescription struct {
    BucketArn *string `json:"bucketArn,omitempty"`
    FileKey *string `json:"fileKey,omitempty"`
    ObjectVersion *string `json:"objectVersion,omitempty"`
    
}

