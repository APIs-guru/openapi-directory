package shared



type ListAssociationVersionsRequest struct {
    AssociationID string `json:"AssociationId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

