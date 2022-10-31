package shared



type ListComplianceItemsRequest struct {
    Filters []ComplianceStringFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceIds []string `json:"ResourceIds,omitempty"`
    ResourceTypes []string `json:"ResourceTypes,omitempty"`
    
}

