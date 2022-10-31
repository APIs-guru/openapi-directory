package shared



type ListAvailableManagementCidrRangesRequest struct {
    ManagementCidrRangeConstraint string `json:"ManagementCidrRangeConstraint"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

