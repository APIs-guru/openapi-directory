package shared



type DescribeSessionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Sessions []Session `json:"Sessions,omitempty"`
    
}

