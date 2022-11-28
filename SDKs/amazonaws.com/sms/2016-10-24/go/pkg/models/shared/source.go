package shared

// Source
// Contains the location of a validation script.
type Source struct {
	S3Location *S3Location `json:"s3Location,omitempty"`
}
