package shared

type FileInfo struct {
	MimeType  *string `json:"mimeType"`
	Sha1Sum   *string `json:"sha1Sum"`
	SourceURL *string `json:"sourceUrl"`
}
