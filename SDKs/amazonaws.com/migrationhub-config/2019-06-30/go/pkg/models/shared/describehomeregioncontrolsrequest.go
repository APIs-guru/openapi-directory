package shared

type DescribeHomeRegionControlsRequest struct {
	ControlID  *string `json:"ControlId"`
	HomeRegion *string `json:"HomeRegion"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	Target     *Target `json:"Target"`
}
