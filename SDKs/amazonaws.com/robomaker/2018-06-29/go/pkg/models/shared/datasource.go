package shared

type DataSource struct {
	Name     *string       `json:"name,omitempty"`
	S3Bucket *string       `json:"s3Bucket,omitempty"`
	S3Keys   []S3KeyOutput `json:"s3Keys,omitempty"`
}
