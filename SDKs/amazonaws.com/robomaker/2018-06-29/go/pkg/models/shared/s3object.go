package shared

// S3Object
// Information about an S3 object.
type S3Object struct {
	Bucket string  `json:"bucket"`
	Etag   *string `json:"etag,omitempty"`
	Key    string  `json:"key"`
}
