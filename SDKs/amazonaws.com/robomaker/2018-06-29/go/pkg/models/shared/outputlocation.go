package shared

type OutputLocation struct {
	S3Bucket *string `json:"s3Bucket"`
	S3Prefix *string `json:"s3Prefix"`
}
