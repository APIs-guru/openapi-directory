package shared



type ListPoliciesRequest struct {
    Filter PolicyTypeEnum `json:"Filter"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

