package shared

type DescribeDataSourcesOutput struct {
	NextToken *string      `json:"NextToken"`
	Results   []DataSource `json:"Results"`
}
