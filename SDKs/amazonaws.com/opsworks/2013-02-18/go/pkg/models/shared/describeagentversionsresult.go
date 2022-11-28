package shared

// DescribeAgentVersionsResult
// Contains the response to a <code>DescribeAgentVersions</code> request.
type DescribeAgentVersionsResult struct {
	AgentVersions []AgentVersion `json:"AgentVersions,omitempty"`
}
