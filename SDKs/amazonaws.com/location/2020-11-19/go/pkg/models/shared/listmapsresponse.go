package shared



type ListMapsResponse struct {
    Entries []ListMapsResponseEntry `json:"Entries"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

