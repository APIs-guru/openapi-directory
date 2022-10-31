package shared

type APISpec struct {
	Annotations        map[string]string `json:"annotations,omitempty"`
	Contents           *string           `json:"contents,omitempty"`
	CreateTime         *string           `json:"createTime,omitempty"`
	Description        *string           `json:"description,omitempty"`
	Filename           *string           `json:"filename,omitempty"`
	Hash               *string           `json:"hash,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
	MimeType           *string           `json:"mimeType,omitempty"`
	Name               *string           `json:"name,omitempty"`
	RevisionCreateTime *string           `json:"revisionCreateTime,omitempty"`
	RevisionID         *string           `json:"revisionId,omitempty"`
	RevisionUpdateTime *string           `json:"revisionUpdateTime,omitempty"`
	SizeBytes          *int32            `json:"sizeBytes,omitempty"`
	SourceURI          *string           `json:"sourceUri,omitempty"`
}
