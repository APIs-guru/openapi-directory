package shared

type DataSource struct {
	Name     *string       `json:"name"`
	S3Bucket *string       `json:"s3Bucket"`
	S3Keys   []S3KeyOutput `json:"s3Keys"`
}
