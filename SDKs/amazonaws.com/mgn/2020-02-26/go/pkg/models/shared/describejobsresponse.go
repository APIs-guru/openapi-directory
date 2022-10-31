package shared



type DescribeJobsResponse struct {
    Items []Job `json:"items,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

