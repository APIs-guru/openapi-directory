package shared

// S3Config
// S3 configuration
type S3Config struct {
	AccessKeyDefined bool    `json:"accessKeyDefined"`
	BucketName       *string `json:"bucketName,omitempty"`
	BucketURL        string  `json:"bucketUrl"`
	EndpointURL      *string `json:"endpointUrl,omitempty"`
	Region           *string `json:"region,omitempty"`
	SecretKeyDefined bool    `json:"secretKeyDefined"`
}
