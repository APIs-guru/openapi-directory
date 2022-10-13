package shared

type DescribeVoicesOutput struct {
	NextToken *string `json:"NextToken"`
	Voices    []Voice `json:"Voices"`
}
