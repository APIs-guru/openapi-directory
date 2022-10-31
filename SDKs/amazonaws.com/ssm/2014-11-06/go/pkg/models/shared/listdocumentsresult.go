package shared



type ListDocumentsResult struct {
    DocumentIdentifiers []DocumentIdentifier `json:"DocumentIdentifiers,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

