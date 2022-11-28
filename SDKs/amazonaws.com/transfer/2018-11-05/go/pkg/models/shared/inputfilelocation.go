package shared

// InputFileLocation
// Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
type InputFileLocation struct {
	EfsFileLocation *EfsFileLocation     `json:"EfsFileLocation,omitempty"`
	S3FileLocation  *S3InputFileLocation `json:"S3FileLocation,omitempty"`
}
