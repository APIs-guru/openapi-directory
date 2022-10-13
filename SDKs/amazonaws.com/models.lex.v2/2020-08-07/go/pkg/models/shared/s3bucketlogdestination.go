package shared

type S3BucketLogDestination struct {
	KmsKeyArn   *string `json:"kmsKeyArn"`
	LogPrefix   string  `json:"logPrefix"`
	S3BucketArn string  `json:"s3BucketArn"`
}
