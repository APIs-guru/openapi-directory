package shared

type S3ConfigUpdateRequest struct {
	AccessKey   *string `json:"accessKey"`
	BucketName  *string `json:"bucketName"`
	BucketURL   *string `json:"bucketUrl"`
	EndpointURL *string `json:"endpointUrl"`
	Region      *string `json:"region"`
	SecretKey   *string `json:"secretKey"`
}
