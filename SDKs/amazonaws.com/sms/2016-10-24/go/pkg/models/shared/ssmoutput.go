package shared

// SsmOutput
// Contains the location of validation output.
type SsmOutput struct {
	S3Location *S3Location `json:"s3Location,omitempty"`
}
