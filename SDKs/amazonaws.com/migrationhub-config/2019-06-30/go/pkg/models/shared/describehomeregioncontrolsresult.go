package shared



type DescribeHomeRegionControlsResult struct {
    HomeRegionControls []HomeRegionControl `json:"HomeRegionControls,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

