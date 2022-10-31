package shared

type DescribeSubnetGroupsResponse struct {
	NextToken    *string       `json:"NextToken,omitempty"`
	SubnetGroups []SubnetGroup `json:"SubnetGroups,omitempty"`
}
