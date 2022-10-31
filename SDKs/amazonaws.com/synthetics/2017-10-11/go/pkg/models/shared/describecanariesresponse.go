package shared

type DescribeCanariesResponse struct {
	Canaries  []Canary `json:"Canaries,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
