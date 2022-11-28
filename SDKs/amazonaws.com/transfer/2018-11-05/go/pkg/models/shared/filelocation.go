package shared

// FileLocation
// Specifies the Amazon S3 or EFS file details to be used in the step.
type FileLocation struct {
	EfsFileLocation *EfsFileLocation `json:"EfsFileLocation,omitempty"`
	S3FileLocation  *S3FileLocation  `json:"S3FileLocation,omitempty"`
}
