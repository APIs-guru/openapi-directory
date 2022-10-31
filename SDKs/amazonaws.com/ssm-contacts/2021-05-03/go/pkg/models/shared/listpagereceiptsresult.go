package shared



type ListPageReceiptsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Receipts []Receipt `json:"Receipts,omitempty"`
    
}

