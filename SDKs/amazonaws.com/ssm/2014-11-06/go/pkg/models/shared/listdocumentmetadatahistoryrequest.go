package shared



type ListDocumentMetadataHistoryRequest struct {
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    Metadata DocumentMetadataEnumEnum `json:"Metadata"`
    Name string `json:"Name"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

