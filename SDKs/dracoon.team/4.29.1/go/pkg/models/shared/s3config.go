package shared

type S3Config struct {
	AccessKeyDefined bool    `json:"accessKeyDefined"`
	BucketName       *string `json:"bucketName"`
	BucketURL        string  `json:"bucketUrl"`
	EndpointURL      *string `json:"endpointUrl"`
	Region           *string `json:"region"`
	SecretKeyDefined bool    `json:"secretKeyDefined"`
}
