package shared



type ListSitesOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Sites []Site `json:"Sites,omitempty"`
    
}

