package shared

type DescribeEvaluationsOutput struct {
	NextToken *string      `json:"NextToken"`
	Results   []Evaluation `json:"Results"`
}
