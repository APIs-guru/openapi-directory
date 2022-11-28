package shared

// DescribeCommandsResult
// Contains the response to a <code>DescribeCommands</code> request.
type DescribeCommandsResult struct {
	Commands []Command `json:"Commands,omitempty"`
}
