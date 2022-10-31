package shared



type DescribeSourceServersResponse struct {
    Items []SourceServer `json:"items,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

