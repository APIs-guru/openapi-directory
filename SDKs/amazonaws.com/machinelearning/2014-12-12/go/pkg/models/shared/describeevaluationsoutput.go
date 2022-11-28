package shared

// DescribeEvaluationsOutput
// Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.
type DescribeEvaluationsOutput struct {
	NextToken *string      `json:"NextToken,omitempty"`
	Results   []Evaluation `json:"Results,omitempty"`
}
