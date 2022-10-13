package shared

type ListDocumentMetadataHistoryRequest struct {
	DocumentVersion *string                  `json:"DocumentVersion"`
	MaxResults      *int64                   `json:"MaxResults"`
	Metadata        DocumentMetadataEnumEnum `json:"Metadata"`
	Name            string                   `json:"Name"`
	NextToken       *string                  `json:"NextToken"`
}
