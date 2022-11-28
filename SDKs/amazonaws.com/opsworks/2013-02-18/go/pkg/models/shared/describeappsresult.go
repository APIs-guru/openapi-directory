package shared

// DescribeAppsResult
// Contains the response to a <code>DescribeApps</code> request.
type DescribeAppsResult struct {
	Apps []App `json:"Apps,omitempty"`
}
