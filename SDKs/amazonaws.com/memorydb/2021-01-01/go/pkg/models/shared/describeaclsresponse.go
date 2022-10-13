package shared

type DescribeAcLsResponse struct {
	AcLs      []ACL   `json:"ACLs"`
	NextToken *string `json:"NextToken"`
}
