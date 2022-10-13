package shared

type DescribeSubnetGroupsResponse struct {
	NextToken    *string       `json:"NextToken"`
	SubnetGroups []SubnetGroup `json:"SubnetGroups"`
}
