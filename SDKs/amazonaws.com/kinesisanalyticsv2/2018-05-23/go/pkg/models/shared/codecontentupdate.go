package shared



type CodeContentUpdate struct {
    S3ContentLocationUpdate *S3ContentLocationUpdate `json:"S3ContentLocationUpdate,omitempty"`
    TextContentUpdate *string `json:"TextContentUpdate,omitempty"`
    ZipFileContentUpdate *string `json:"ZipFileContentUpdate,omitempty"`
    
}

