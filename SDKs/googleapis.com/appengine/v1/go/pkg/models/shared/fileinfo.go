package shared

type FileInfo struct {
	MimeType  *string `json:"mimeType,omitempty"`
	Sha1Sum   *string `json:"sha1Sum,omitempty"`
	SourceURL *string `json:"sourceUrl,omitempty"`
}
