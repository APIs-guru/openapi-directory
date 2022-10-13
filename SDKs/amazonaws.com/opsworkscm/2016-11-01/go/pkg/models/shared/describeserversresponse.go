package shared

type DescribeServersResponse struct {
	NextToken *string  `json:"NextToken"`
	Servers   []Server `json:"Servers"`
}
