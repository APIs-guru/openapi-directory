package shared

type DescribeRuntimeVersionsResponse struct {
	NextToken       *string          `json:"NextToken"`
	RuntimeVersions []RuntimeVersion `json:"RuntimeVersions"`
}
