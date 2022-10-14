package shared

type DescribeDataSourcesOutput struct {
	NextToken *string      `json:"NextToken,omitempty"`
	Results   []DataSource `json:"Results,omitempty"`
}
