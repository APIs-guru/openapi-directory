package shared

type APISpec struct {
	Annotations        map[string]string `json:"annotations"`
	Contents           *string           `json:"contents"`
	CreateTime         *string           `json:"createTime"`
	Description        *string           `json:"description"`
	Filename           *string           `json:"filename"`
	Hash               *string           `json:"hash"`
	Labels             map[string]string `json:"labels"`
	MimeType           *string           `json:"mimeType"`
	Name               *string           `json:"name"`
	RevisionCreateTime *string           `json:"revisionCreateTime"`
	RevisionID         *string           `json:"revisionId"`
	RevisionUpdateTime *string           `json:"revisionUpdateTime"`
	SizeBytes          *int32            `json:"sizeBytes"`
	SourceURI          *string           `json:"sourceUri"`
}
