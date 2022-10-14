package shared

type FileLocation struct {
	EfsFileLocation *EfsFileLocation `json:"EfsFileLocation,omitempty"`
	S3FileLocation  *S3FileLocation  `json:"S3FileLocation,omitempty"`
}
