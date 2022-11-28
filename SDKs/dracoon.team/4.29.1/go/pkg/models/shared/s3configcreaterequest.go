package shared

// S3ConfigCreateRequest
// Request model for creating a S3 configuration
type S3ConfigCreateRequest struct {
	AccessKey   string  `json:"accessKey"`
	BucketName  *string `json:"bucketName,omitempty"`
	BucketURL   *string `json:"bucketUrl,omitempty"`
	EndpointURL *string `json:"endpointUrl,omitempty"`
	Region      *string `json:"region,omitempty"`
	SecretKey   string  `json:"secretKey"`
}
