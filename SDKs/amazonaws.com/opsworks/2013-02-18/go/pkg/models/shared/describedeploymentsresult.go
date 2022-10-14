package shared

type DescribeDeploymentsResult struct {
	Deployments []Deployment `json:"Deployments,omitempty"`
}
