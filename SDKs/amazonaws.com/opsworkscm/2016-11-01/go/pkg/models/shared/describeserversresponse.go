package shared

type DescribeServersResponse struct {
	NextToken *string  `json:"NextToken,omitempty"`
	Servers   []Server `json:"Servers,omitempty"`
}
