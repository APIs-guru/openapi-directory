package shared

// DescribeDataSourcesOutput
// Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.
type DescribeDataSourcesOutput struct {
	NextToken *string      `json:"NextToken,omitempty"`
	Results   []DataSource `json:"Results,omitempty"`
}
