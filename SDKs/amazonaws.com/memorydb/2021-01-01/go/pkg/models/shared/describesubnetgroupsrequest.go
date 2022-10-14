package shared

type DescribeSubnetGroupsRequest struct {
	MaxResults      *int64  `json:"MaxResults,omitempty"`
	NextToken       *string `json:"NextToken,omitempty"`
	SubnetGroupName *string `json:"SubnetGroupName,omitempty"`
}
