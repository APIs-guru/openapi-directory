package shared

// S3KeyOutput
// Information about S3 keys.
type S3KeyOutput struct {
	Etag  *string `json:"etag,omitempty"`
	S3Key *string `json:"s3Key,omitempty"`
}
