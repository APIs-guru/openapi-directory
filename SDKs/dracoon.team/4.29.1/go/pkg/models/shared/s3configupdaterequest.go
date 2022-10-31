package shared



type S3ConfigUpdateRequest struct {
    AccessKey *string `json:"accessKey,omitempty"`
    BucketName *string `json:"bucketName,omitempty"`
    BucketURL *string `json:"bucketUrl,omitempty"`
    EndpointURL *string `json:"endpointUrl,omitempty"`
    Region *string `json:"region,omitempty"`
    SecretKey *string `json:"secretKey,omitempty"`
    
}

