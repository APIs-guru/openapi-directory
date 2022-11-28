package shared

// OutputLocation
// The output location.
type OutputLocation struct {
	S3Bucket *string `json:"s3Bucket,omitempty"`
	S3Prefix *string `json:"s3Prefix,omitempty"`
}
