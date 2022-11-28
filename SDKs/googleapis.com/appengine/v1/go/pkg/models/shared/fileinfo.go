package shared

// FileInfo
// Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.
type FileInfo struct {
	MimeType  *string `json:"mimeType,omitempty"`
	Sha1Sum   *string `json:"sha1Sum,omitempty"`
	SourceURL *string `json:"sourceUrl,omitempty"`
}
