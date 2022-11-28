package shared

// S3Location
// Details of the S3 bucket that report generator reports are published to.
type S3Location struct {
	Bucket    *string `json:"bucket,omitempty"`
	KeyPrefix *string `json:"keyPrefix,omitempty"`
}
