package shared

// S3ConfigUpdateRequest
// Request model for updating a S3 configuration
type S3ConfigUpdateRequest struct {
	AccessKey   *string `json:"accessKey,omitempty"`
	BucketName  *string `json:"bucketName,omitempty"`
	BucketURL   *string `json:"bucketUrl,omitempty"`
	EndpointURL *string `json:"endpointUrl,omitempty"`
	Region      *string `json:"region,omitempty"`
	SecretKey   *string `json:"secretKey,omitempty"`
}
