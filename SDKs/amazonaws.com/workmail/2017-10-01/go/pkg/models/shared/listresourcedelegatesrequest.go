package shared



type ListResourceDelegatesRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationID string `json:"OrganizationId"`
    ResourceID string `json:"ResourceId"`
    
}

