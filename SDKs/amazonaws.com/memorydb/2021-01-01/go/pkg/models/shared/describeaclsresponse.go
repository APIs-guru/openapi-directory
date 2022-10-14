package shared

type DescribeAcLsResponse struct {
	AcLs      []ACL   `json:"ACLs,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
