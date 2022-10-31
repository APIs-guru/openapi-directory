package shared



type ListAssociationsResult struct {
    Associations []Association `json:"Associations,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

