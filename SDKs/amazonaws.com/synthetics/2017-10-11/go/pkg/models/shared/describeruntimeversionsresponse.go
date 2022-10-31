package shared

type DescribeRuntimeVersionsResponse struct {
	NextToken       *string          `json:"NextToken,omitempty"`
	RuntimeVersions []RuntimeVersion `json:"RuntimeVersions,omitempty"`
}
