package shared



type ListPagesByContactResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Pages []Page `json:"Pages"`
    
}

