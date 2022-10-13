package shared

type DescribeUsersResponse struct {
	NextToken *string `json:"NextToken"`
	Users     []User  `json:"Users"`
}
