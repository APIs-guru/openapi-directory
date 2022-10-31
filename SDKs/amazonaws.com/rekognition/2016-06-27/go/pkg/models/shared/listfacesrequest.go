package shared



type ListFacesRequest struct {
    CollectionID string `json:"CollectionId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

