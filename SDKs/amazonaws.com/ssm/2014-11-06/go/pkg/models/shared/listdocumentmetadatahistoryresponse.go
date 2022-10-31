package shared



type ListDocumentMetadataHistoryResponse struct {
    Author *string `json:"Author,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    Metadata *DocumentMetadataResponseInfo `json:"Metadata,omitempty"`
    Name *string `json:"Name,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

