package shared



type ListQualificationTypesRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    MustBeOwnedByCaller *bool `json:"MustBeOwnedByCaller,omitempty"`
    MustBeRequestable bool `json:"MustBeRequestable"`
    NextToken *string `json:"NextToken,omitempty"`
    Query *string `json:"Query,omitempty"`
    
}

