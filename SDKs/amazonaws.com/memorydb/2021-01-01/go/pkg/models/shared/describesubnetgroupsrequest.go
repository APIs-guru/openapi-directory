package shared

type DescribeSubnetGroupsRequest struct {
	MaxResults      *int64  `json:"MaxResults"`
	NextToken       *string `json:"NextToken"`
	SubnetGroupName *string `json:"SubnetGroupName"`
}
