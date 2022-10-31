package shared



type ListTablesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Tables []Table `json:"Tables,omitempty"`
    
}

