package shared

// S3Location
// Location of an Amazon S3 object.
type S3Location struct {
	Bucket *string `json:"bucket,omitempty"`
	Key    *string `json:"key,omitempty"`
}
