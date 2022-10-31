package shared



type Source struct {
    Architecture *ArchitectureEnum `json:"architecture,omitempty"`
    Etag *string `json:"etag,omitempty"`
    S3Bucket *string `json:"s3Bucket,omitempty"`
    S3Key *string `json:"s3Key,omitempty"`
    
}

