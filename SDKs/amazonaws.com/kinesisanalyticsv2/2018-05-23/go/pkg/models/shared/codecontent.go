package shared

type CodeContent struct {
	S3ContentLocation *S3ContentLocation `json:"S3ContentLocation"`
	TextContent       *string            `json:"TextContent"`
	ZipFileContent    *string            `json:"ZipFileContent"`
}
