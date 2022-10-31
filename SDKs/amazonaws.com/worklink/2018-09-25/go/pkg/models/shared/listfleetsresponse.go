package shared



type ListFleetsResponse struct {
    FleetSummaryList []FleetSummary `json:"FleetSummaryList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

