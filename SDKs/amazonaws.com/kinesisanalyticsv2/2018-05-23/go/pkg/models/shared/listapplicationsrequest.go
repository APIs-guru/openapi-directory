package shared



type ListApplicationsRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

