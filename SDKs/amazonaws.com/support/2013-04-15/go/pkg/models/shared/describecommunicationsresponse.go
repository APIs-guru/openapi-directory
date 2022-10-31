package shared



type DescribeCommunicationsResponse struct {
    Communications []Communication `json:"communications,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

