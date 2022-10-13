package shared

type DescribeAcLsRequest struct {
	ACLName    *string `json:"ACLName"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
