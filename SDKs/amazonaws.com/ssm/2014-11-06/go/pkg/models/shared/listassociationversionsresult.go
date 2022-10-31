package shared



type ListAssociationVersionsResult struct {
    AssociationVersions []AssociationVersionInfo `json:"AssociationVersions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

