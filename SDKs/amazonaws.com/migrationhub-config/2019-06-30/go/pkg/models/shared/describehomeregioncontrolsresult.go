package shared

type DescribeHomeRegionControlsResult struct {
	HomeRegionControls []HomeRegionControl `json:"HomeRegionControls"`
	NextToken          *string             `json:"NextToken"`
}
