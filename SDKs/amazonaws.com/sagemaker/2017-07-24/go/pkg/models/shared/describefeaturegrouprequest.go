package shared

type DescribeFeatureGroupRequest struct {
	FeatureGroupName string  `json:"FeatureGroupName"`
	NextToken        *string `json:"NextToken,omitempty"`
}
