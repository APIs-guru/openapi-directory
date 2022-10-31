package shared

type ListDeploymentJobsResponse struct {
	DeploymentJobs []DeploymentJob `json:"deploymentJobs,omitempty"`
	NextToken      *string         `json:"nextToken,omitempty"`
}
