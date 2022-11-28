package shared

// DescribeDeploymentsResult
// Contains the response to a <code>DescribeDeployments</code> request.
type DescribeDeploymentsResult struct {
	Deployments []Deployment `json:"Deployments,omitempty"`
}
