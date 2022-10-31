package shared



type ListApplicationVersionsRequest struct {
    ApplicationName string `json:"ApplicationName"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

