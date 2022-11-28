package shared

// ZipInfo
// The zip file information for a zip deployment.
type ZipInfo struct {
	FilesCount *int32  `json:"filesCount,omitempty"`
	SourceURL  *string `json:"sourceUrl,omitempty"`
}
