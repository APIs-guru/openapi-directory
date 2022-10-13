package shared

type ListDocumentMetadataHistoryResponse struct {
	Author          *string                       `json:"Author"`
	DocumentVersion *string                       `json:"DocumentVersion"`
	Metadata        *DocumentMetadataResponseInfo `json:"Metadata"`
	Name            *string                       `json:"Name"`
	NextToken       *string                       `json:"NextToken"`
}
