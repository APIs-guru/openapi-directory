package shared



type DescribeHomeRegionControlsRequest struct {
    ControlID *string `json:"ControlId,omitempty"`
    HomeRegion *string `json:"HomeRegion,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Target *Target `json:"Target,omitempty"`
    
}

