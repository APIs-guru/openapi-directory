package shared



type CodeContent struct {
    S3ContentLocation *S3ContentLocation `json:"S3ContentLocation,omitempty"`
    TextContent *string `json:"TextContent,omitempty"`
    ZipFileContent *string `json:"ZipFileContent,omitempty"`
    
}

