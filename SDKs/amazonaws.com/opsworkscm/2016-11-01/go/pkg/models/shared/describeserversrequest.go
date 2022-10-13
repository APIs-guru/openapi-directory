package shared

type DescribeServersRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	ServerName *string `json:"ServerName"`
}
