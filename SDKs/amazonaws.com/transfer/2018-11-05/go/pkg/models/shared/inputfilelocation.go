package shared

type InputFileLocation struct {
	EfsFileLocation *EfsFileLocation     `json:"EfsFileLocation,omitempty"`
	S3FileLocation  *S3InputFileLocation `json:"S3FileLocation,omitempty"`
}
