package shared



type CodeContentDescription struct {
    CodeMd5 *string `json:"CodeMD5,omitempty"`
    CodeSize *int64 `json:"CodeSize,omitempty"`
    S3ApplicationCodeLocationDescription *S3ApplicationCodeLocationDescription `json:"S3ApplicationCodeLocationDescription,omitempty"`
    TextContent *string `json:"TextContent,omitempty"`
    
}

