package shared

type CodeContentDescription struct {
	CodeMd5                              *string                               `json:"CodeMD5"`
	CodeSize                             *int64                                `json:"CodeSize"`
	S3ApplicationCodeLocationDescription *S3ApplicationCodeLocationDescription `json:"S3ApplicationCodeLocationDescription"`
	TextContent                          *string                               `json:"TextContent"`
}
