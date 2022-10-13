package shared

type DescribeCanariesResponse struct {
	Canaries  []Canary `json:"Canaries"`
	NextToken *string  `json:"NextToken"`
}
