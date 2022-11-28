package shared

// CodeContent
// Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application.
type CodeContent struct {
	S3ContentLocation *S3ContentLocation `json:"S3ContentLocation,omitempty"`
	TextContent       *string            `json:"TextContent,omitempty"`
	ZipFileContent    *string            `json:"ZipFileContent,omitempty"`
}
