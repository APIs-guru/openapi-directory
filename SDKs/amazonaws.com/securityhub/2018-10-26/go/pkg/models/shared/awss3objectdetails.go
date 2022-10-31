package shared



type AwsS3ObjectDetails struct {
    ContentType *string `json:"ContentType,omitempty"`
    ETag *string `json:"ETag,omitempty"`
    LastModified *string `json:"LastModified,omitempty"`
    SsekmsKeyID *string `json:"SSEKMSKeyId,omitempty"`
    ServerSideEncryption *string `json:"ServerSideEncryption,omitempty"`
    VersionID *string `json:"VersionId,omitempty"`
    
}

