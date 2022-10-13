package shared

type Artifact struct {
	Contents   *string `json:"contents"`
	CreateTime *string `json:"createTime"`
	Hash       *string `json:"hash"`
	MimeType   *string `json:"mimeType"`
	Name       *string `json:"name"`
	SizeBytes  *int32  `json:"sizeBytes"`
	UpdateTime *string `json:"updateTime"`
}
