package shared

type CodeContentUpdate struct {
	S3ContentLocationUpdate *S3ContentLocationUpdate `json:"S3ContentLocationUpdate"`
	TextContentUpdate       *string                  `json:"TextContentUpdate"`
	ZipFileContentUpdate    *string                  `json:"ZipFileContentUpdate"`
}
