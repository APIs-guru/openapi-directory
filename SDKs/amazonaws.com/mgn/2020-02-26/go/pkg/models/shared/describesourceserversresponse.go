package shared

type DescribeSourceServersResponse struct {
	Items     []SourceServer `json:"items"`
	NextToken *string        `json:"nextToken"`
}
