package shared

// CodeContentUpdate
// Describes an update to the code of an application. Not supported for Apache Zeppelin.
type CodeContentUpdate struct {
	S3ContentLocationUpdate *S3ContentLocationUpdate `json:"S3ContentLocationUpdate,omitempty"`
	TextContentUpdate       *string                  `json:"TextContentUpdate,omitempty"`
	ZipFileContentUpdate    *string                  `json:"ZipFileContentUpdate,omitempty"`
}
