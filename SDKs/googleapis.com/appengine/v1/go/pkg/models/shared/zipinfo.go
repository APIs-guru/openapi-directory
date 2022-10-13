package shared

type ZipInfo struct {
	FilesCount *int32  `json:"filesCount"`
	SourceURL  *string `json:"sourceUrl"`
}
