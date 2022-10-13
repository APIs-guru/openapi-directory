package shared

type ListDeploymentJobsResponse struct {
	DeploymentJobs []DeploymentJob `json:"deploymentJobs"`
	NextToken      *string         `json:"nextToken"`
}
